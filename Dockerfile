# 使用官方推荐镜像作为基础镜像
#FROM runpod/stable-diffusion:web-automatic-6.0.0
FROM ubuntu:22.04

# 设置工作目录
WORKDIR /app

## 复制工程文件
#COPY . .

RUN apt update
RUN apt install -y wget git python3 python3-venv python3-pip
RUN ln -s /usr/bin/python3 /usr/bin/python

RUN git clone -b aweminds https://github.com/AweMinds/stable-diffusion-webui.git .
RUN git checkout aweminds

#RUN python3 -m venv venv
#RUN ./venv/bin/activate

## 安装依赖
RUN python -c "import launch_awe; launch_awe.prepare_environment()"
#RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口
EXPOSE 7860

# 启动应用
CMD ["bash", "start-awe.sh"]