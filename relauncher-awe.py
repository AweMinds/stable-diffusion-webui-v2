import argparse
import os
import time

parser = argparse.ArgumentParser()
parser.add_argument("-p", "--port", help="端口")
parser.add_argument("-d", "--device-id", help="GPU的序号")
args = parser.parse_args()

print("port: " + args.port)
print("device-id: " + args.device_id)

n = 0
while True:
    print(f"[Device {args.device_id}] -  Relauncher: Launching...")

    if n > 0:
        print(f'\tRelaunch count: {n}')

    launch_string = f"./webui.sh -f --port {args.port} --device-id {args.device_id} --opt-sdp-attention --listen " \
                    f"--logging-file-dir ./logs --logging-level DEBUG " \
                    f"--theme dark --opt-channelslast"
    # f"--system-monitor-addr http://47.100.10.24:8080/api/monitor --system-monitor-api-secret API_SECRET " \

    print(f"[Device {args.device_id}] - launch_string: {launch_string}")
    os.system(launch_string)
    print(f"[Device {args.device_id}] - Relauncher: Process is ending. Relaunching in 2s...")
    n += 1
    time.sleep(2)
