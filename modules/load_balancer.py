import json
import logging
import os

import gradio
import requests
import starlette
from pydantic import BaseModel, Field

import modules.shared as shared
from modules import sd_samplers
from modules.call_queue import wrap_gradio_gpu_call
from modules.sd_samplers import samplers_for_img2img

logger = logging.getLogger(__name__)


def get_inference_function(func, func_name: str = '', extra_outputs=None, add_monitor_state=False):
    def wrap_func(request: gradio.routes.Request, *args, **kwargs):
        load_balancer_addr = shared.cmd_opts.load_balancer_addr

        host = get_header(request.headers, 'host')
        inference_node_name = get_header(request.headers, 'inference-node')

        if load_balancer_addr and not inference_node_name:
            inference_node = get_fastest_inference_node(args)
            node_name = inference_node.get('ipPort', None)
            if host != node_name:
                return balancing_inference(request, *args, **kwargs)

        return wrap_gradio_gpu_call(
            func, func_name=func_name, extra_outputs=extra_outputs, add_monitor_state=add_monitor_state)(
            request, *args, **kwargs)

    return wrap_func


def get_fastest_inference_node(data):
    balancer_addr = shared.cmd_opts.load_balancer_addr
    if not balancer_addr:
        logger.error('load_balancer_addr is not present')
        return

    request_url = f'{balancer_addr}/balancing'
    response = requests.post(url=request_url, json=json.dumps(data), headers={"Content-Type": "application/json"})

    if response.status_code != 200:
        logger.error("can not get inference node info")
        # raise gr.Error("can not get inference node info")

    inference_node_info = json.loads(response.text)
    shared.inference_node_info = inference_node_info['data']

    return inference_node_info['data']


def get_txt2img_predict_body(args, fn_index, session_hash, event_data):
    sampler_index = args[5]
    sampler_name = sd_samplers.all_samplers[sampler_index].name

    hr_sampler_index = args[26]
    hr_sampler_name = samplers_for_img2img[hr_sampler_index - 1].name if hr_sampler_index != 0 else 'Use same sampler'

    # AWETODO：script先固定None，后续放开script功能后，再处理
    script_index = args[30]
    script_name = "None"

    request_body = args[:5] + (sampler_name,) + args[6:]
    request_body1 = request_body[:26] + (hr_sampler_name,) + request_body[27:]
    request_body2 = request_body1[:30] + (script_name,) + request_body1[31:]

    dict_data = {"fn_index": fn_index, "data": request_body2, "session_hash": session_hash, "event_data": event_data}

    return dict_data


def balancing_inference(request: gradio.routes.Request, *args, **kwargs):
    node_ip = shared.inference_node_info['ipPort']
    fn_index = shared.inference_node_info['fnIndex']
    session_hash = shared.inference_node_info['sessionHash']

    request_body = json.dumps(get_txt2img_predict_body(args, fn_index, session_hash, None))
    request_header = {"Content-Type": "application/json", "inference-node": node_ip}

    request_url = f'http://{node_ip}/api/generate_btn_fn'
    post = requests.post(url=request_url, data=request_body, headers=request_header)
    data = json.loads(post.text)['data']
    file_paths = []
    for img in data[0]:
        img_url = f'http://{node_ip}/file=' + img['name']
        file_name = img['name']
        if os.path.exists(file_name):
            file_paths.append(file_name)
            continue

        res = requests.get(img_url)
        if res.status_code == 200:
            with open(file_name, "wb") as f:
                f.write(res.content)
                file_paths.append(file_name)
                print(f'Image Successfully Downloaded: {file_name}')
        else:
            print('Image Could not be retrieved:')
            print(res.text)
            print(res.status_code)

    return (file_paths,) + tuple(data)[1:]


def query_progress(id_task):
    node_ip = shared.inference_node_info['ipPort']
    request_url = f"http://{node_ip}/internal/progress"
    data = {"id_task": id_task, "id_live_preview": 0}

    post = requests.post(url=request_url, json=data, headers={"Content-Type": "application/json"})
    json_loads = json.loads(post.text)

    return ProgressResponse(active=json_loads['active'], queued=json_loads['queued'], completed=json_loads['completed'],
                            progress=json_loads['progress'], eta=json_loads['eta'],
                            live_preview=json_loads['live_preview'], id_live_preview=json_loads['id_live_preview'],
                            textinfo=json_loads['textinfo'])


def inference_action(action: str, id_task: str, task_type: str):
    system_monitor_api_secret = shared.cmd_opts.system_monitor_api_secret
    node_ip = shared.inference_node_info['ipPort']
    request_url = f"http://{node_ip}/daemon/v1/{action}"
    data = {"id_task": id_task}
    header_data = {"Content-Type": "application/json", "Api-Secret": system_monitor_api_secret}

    requests.post(url=request_url, json=data, headers=header_data)


def interrupt_inference(id_task: str, task_type: str):
    inference_action("interrupt", id_task, task_type)


def skip_inference(id_task: str, task_type: str):
    inference_action("skip", id_task, task_type)


def get_header(headers, key):
    if isinstance(headers, gradio.routes.Obj):
        return getattr(headers, key, None)
    if isinstance(headers, starlette.datastructures.Headers):
        return headers.get(key, default=None)


class ProgressResponse(BaseModel):
    active: bool = Field(title="Whether the task is being worked on right now")
    queued: bool = Field(title="Whether the task is in queue")
    completed: bool = Field(title="Whether the task has already finished")
    progress: float = Field(default=None, title="Progress", description="The progress with a range of 0 to 1")
    eta: float = Field(default=None, title="ETA in secs")
    live_preview: str = Field(default=None, title="Live preview image", description="Current live preview; a data: uri")
    id_live_preview: int = Field(default=None, title="Live preview image ID",
                                 description="Send this together with next request to prevent receiving same image")
    textinfo: str = Field(default=None, title="Info text", description="Info text used by WebUI.")
