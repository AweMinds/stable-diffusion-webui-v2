#!/bin/bash
echo "-------Stopping WebUI-------"

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
