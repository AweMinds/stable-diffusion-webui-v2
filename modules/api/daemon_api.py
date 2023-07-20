from fastapi import FastAPI, Depends, Request, HTTPException

from modules.api.models import GetTaskCountResponse, GetDaemonStatusResponse, UpdateStatusRequest, GetCurrentModelResponse, InterruptRequest
import modules.progress
import modules.shared
import modules.shared as shared
import modules.progress as progress

# service is able to serve any requests
DAEMON_STATUS_UP = 'up'
# service is able to server pending requests only
DAEMON_STATUS_PENDING = 'pending'
# but not able to serve new request, and going to be died
DAEMON_STATUS_DOWN = 'down'

SECRET_HEADER_KEY = 'Api-Secret'


class DaemonApi:

    def __init__(self, app: FastAPI):
        self._app = app
        self._secret = modules.shared.cmd_opts.system_monitor_api_secret
        self._status = DAEMON_STATUS_UP

        self._add_api_route("/daemon/v1/status", self.get_status, methods=["GET"], response_model=GetDaemonStatusResponse)
        self._add_api_route("/daemon/v1/status", self.set_status, methods=["PUT"])
        self._add_api_route("/daemon/v1/pending-task-count", self.get_task_count, methods=["GET"], response_model=GetTaskCountResponse)
        self._add_api_route("/daemon/v1/current_model", self.get_current_model, methods=["GET"], response_model=GetCurrentModelResponse)
        self._add_api_route("/daemon/v1/interrupt", self.interrupt_inference, methods=["POST"])
        self._add_api_route("/daemon/v1/skip", self.skip_inference, methods=["POST"])

    def get_status(self):
        return GetDaemonStatusResponse(status=self._status)

    def set_status(self, request: UpdateStatusRequest):
        status = request.status
        if status not in (DAEMON_STATUS_PENDING, DAEMON_STATUS_UP, DAEMON_STATUS_DOWN):
            raise HTTPException(status_code=400, detail="invalid status")

        self._status = request.status
        return GetDaemonStatusResponse(status=self._status)

    def get_task_count(self):
        current_task, pending_tasks, _, finished_task_count, failed_task_count = modules.progress.get_task_queue_info()
        return GetTaskCountResponse(current_task=current_task if current_task else '',
                                    queued_tasks=pending_tasks,
                                    finished_task_count=finished_task_count,
                                    failed_task_count=failed_task_count)

    def get_current_model(self):
        sd_model = modules.shared.sd_model
        if not sd_model:
            return GetCurrentModelResponse()

        checkpoint_info = sd_model.sd_checkpoint_info
        if not checkpoint_info:
            return GetCurrentModelResponse()

        return GetCurrentModelResponse(title=checkpoint_info.title, name=checkpoint_info.name,
                                       model_name=checkpoint_info.model_name, shorthash=checkpoint_info.shorthash,
                                       sha256=checkpoint_info.sha256)

    def _add_api_route(self, path: str, endpoint, **kwargs):
        return self._app.add_api_route(path, endpoint, dependencies=[Depends(self._auth)], **kwargs)

    def _auth(self, request: Request):
        secret = request.headers.get(SECRET_HEADER_KEY, '')
        if secret == self._secret:
            return True

        raise HTTPException(status_code=401, detail="invalid API secret")

    def interrupt_inference(self, request: InterruptRequest):
        task_id = request.id_task
        current_task_id = progress.current_task
        if task_id == current_task_id:
            shared.state.interrupt()

    def skip_inference(self, request: InterruptRequest):
        task_id = request.id_task
        current_task_id = progress.current_task
        if task_id == current_task_id:
            shared.state.skip()
