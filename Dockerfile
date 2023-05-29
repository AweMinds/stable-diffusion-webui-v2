# 使用官方推荐镜像作为基础镜像
#FROM runpod/stable-diffusion:web-automatic-6.0.0
FROM registry.cn-shanghai.aliyuncs.com/aweminds/aweminds-webui:1.1-slim-amd64

# 设置工作目录
WORKDIR /app

## 暴露端口
EXPOSE 7861
#
# 启动应用
CMD ["bash", "start-awe.sh"]