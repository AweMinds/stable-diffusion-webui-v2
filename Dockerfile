# 基础镜像
FROM ubuntu:22.04

# 设置工作目录
WORKDIR /app

RUN apt update
RUN apt install -y wget git python3 python3-venv python3-pip
RUN ln -s /usr/bin/python3 /usr/bin/python

## 安装TCMalloc依赖
RUN apt install -y libgl1-mesa-glx libglib2.0-0 google-perftools

#安装ControlNet依赖
RUN apt-get install -y sox ffmpeg libcairo2 libcairo2-dev

#下载代码
RUN git clone -b aweminds https://github.com/AweMinds/stable-diffusion-webui.git .

# 安装webUI依赖
RUN ./webui_awe.sh -f --skip-torch-cuda-test

#文件操作
RUN ln -s /app/venv/lib/python3.10/site-packages/torch/lib/libnvrtc-672ee683.so.11.2 /app/venv/lib/python3.10/site-packages/torch/lib/libnvrtc.so
RUN mv config_prd.json config.json
RUN mv cache_prd.json cache.json

## 暴露端口
EXPOSE 7860 7861 7862 7863

# 启动应用
ENTRYPOINT ["/bin/sh", "-c", "./start_container.sh"]

#CMD start-awe.sh $GPU_COUNT