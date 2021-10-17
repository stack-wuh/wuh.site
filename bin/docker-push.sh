#!/usr/bin/env bash

echo '======= docker push pedding ========='

echo '全部入参: ' $@
echo $PWD

version=$(node -e "(function () { 
  const path = require('path')
  const pathname = path.resolve(__dirname, './package.json')
  console.log(require(pathname).version) 
})()")

echo '当前版本: '$version

docker build  -f Dockerfile -t 'shadowu/wuh.site:latest' -t 'shadowu/wuh.site:'$version .

docker container stop frontend.$version
docker container rm frontend.$version
docker run --name frontend.$version -it -p 3100:3000 --restart=always shadowu/wuh.site:latest

systemctl restart nginx
systemctl status nginx

docker push 'shadowu/wuh.site:latest'
docker push 'shadowu/wuh.site:'$version

docker history shadowu/wuh.site:latest