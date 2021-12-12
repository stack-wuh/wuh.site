#!/usr/bin/env bash

set -e

git reset --hard HEAD~~
git pull origin main

VERSION=$(jq -r '.version' package.json)

echo '全部参数:' $@

echo '============== docker build contianer ==========='
echo '构建container的版本号: ' $VERSION

# docker ps -a | grep 'frontend.' | awk '{print $1}' | xargs docker stop
docker ps -a | grep 'frontend.' | awk '{print $1}' | xargs docker rm
docker pull shadowu/wuh.site:latest
docker container run --name frontend.$VERSION -it -p 3100:3000 --restart=always shadowu/wuh.site:latest

systemctl status docker
systemctl restart nginx

echo '============== docker build successfully =================='