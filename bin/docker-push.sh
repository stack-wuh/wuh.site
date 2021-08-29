#!/usr/bin/env bash

echo 'welcome to shell'

echo '全部入参: ' $@

version=$(node -e "(function () { console.log(require('../package.json').version) })()")

docker build -t 'shadowu/wuh.site:'$version ../
docker push 'shadowu/wuh.site:'$version