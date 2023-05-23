# 使用官方推荐镜像作为基础镜像
#FROM runpod/stable-diffusion:web-automatic-6.0.0
FROM kent0113/sd-webui-aki:v1

# 设置工作目录
WORKDIR /

# 复制start-awe.sh，作为启动脚本
COPY start-awe.sh ./start-awe.sh
RUN chmod a+x start-awe.sh

# 设置工作目录
WORKDIR /workspace/stable-diffusion-webui

# 复制relauncher-awe.py，作为启动的python文件
COPY relauncher-awe.py ./relauncher-awe.py

# 复制config.json 修改了quicksettings
COPY config.json ./config.json