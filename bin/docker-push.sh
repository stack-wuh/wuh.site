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

# docker push 'shadowu/wuh.site:latest'
# docker push 'shadowu/wuh.site:'$version

docker history shadowu/wuh.site:latest