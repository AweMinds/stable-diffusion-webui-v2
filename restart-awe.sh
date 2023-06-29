#!/bin/bash
echo "-------Stopping WebUI-------"

export GPU_COUNT_RESTART=${1:-1}

# 查找Python进程
pid=$(ps aux | grep python | grep launch | awk '{print $2}')

#echo $pid
# 如果找到了Python进程，则杀死该进程
if [ -n "$pid" ]; then
  echo "Killing Python process $pid"
  kill $pid
else
  echo "No Python process found"
fi

# 等待1秒, 进程都结束
sleep 1

# 执行命令，启动新的
./start-awe.sh GPU_COUNT_RESTART
