#!/usr/bin/env bash

echo 'welcome to shell'

echo '全部入参: ' $@
echo $PWD

version=$(node -e "(function () { 
  // const path = require('path')
  // const pathname = path.resolve(__dirname, './package.json')
  console.log(require('../package.json').version) 
})()")

echo '当前版本: '$version

docker build -t 'shadowu/wuh.site:latest' -t 'shadowu/wuh.site:'$version ../

docker push 'shadowu/wuh.site:latest'
docker push 'shadowu/wuh.site:'$version