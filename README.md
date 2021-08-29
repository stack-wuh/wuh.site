
<p>
  <a href='https://nextjs.org/' style="margin-right: 8px;">
    <img src="https://src.wuh.site/2021-05/2021-08-07-nextjs.org_.png" width='135px' height='60px' />
  </a>
  <a href='https://wuh.site'>
    <img src='https://wuh.site/avatar.png' width='60px' height='60px'>
  </a>
</p>

# wuh.site
![](https://img.shields.io/github/v/release/stack-wuh/react-router-config)
![](https://img.shields.io/github/commits-since/stack-wuh/react-router-config/v1.5.0/v2)
![](https://img.shields.io/github/languages/top/stack-wuh/react-router-config)
![](https://img.shields.io/github/contributors/stack-wuh/react-router-config)
![](https://img.shields.io/github/last-commit/stack-wuh/react-router-config/v2)
![](https://img.shields.io/github/package-json/version/stack-wuh/react-router-config/v2)
![](https://img.shields.io/github/repo-size/stack-wuh/react-router-config)
![](https://img.shields.io/github/package-json/keywords/stack-wuh/react-router-config/v2)
![](https://img.shields.io/docker/pulls/shadowu/wuh.site?color=red&label=%E4%BD%BF%E7%94%A8%E6%AC%A1%E6%95%B0&logo=docker&logoColor=lightblue)
![](https://img.shields.io/docker/image-size/shadowu/wuh.site?label=%E9%95%9C%E5%83%8F%E5%A4%A7%E5%B0%8F&logo=docker&logoColor=lightblue)
![](https://img.shields.io/docker/v/shadowu/wuh.site?color=red&label=docker%20version&logo=docker&logoColor=lightblue)
> 使用Nextjs，Mongodb和Express构建的个人网站

> 由Koajs提供日志分析，ant-design-prod搭建后台

首页地址: <a href='https://wuh.site' target='_blank'>https://wuh.site</a>       
Docker镜像: <a href='https://hub.docker.com/r/shadowu/wuh.site' target='_blank'>shadowu/wuh.site</a>

## 相关项目
+ **[AntDesignPro](https://console.wuh.site)后台管理系统**
+ **[Koa-console](https://api.wuh.site)Koa构建的基础服务**


## 更新日志
+ **[github.releases](https://github.com/stack-wuh/react-router-config/releases)发布日志**

## 迭代计划
+ **[github.project](https://github.com/stack-wuh/react-router-config/projects/1)项目管理**

## ScreenShot
<div style="display: flex; align-items: flex-start;">
  <img style="flex: 1;" src="https://src.wuh.site/2021-05/2021-08-07-wuh.site_.png" width='45%' />
  <img style="flex: 1;" src='https://src.wuh.site/2021-05/2021-08-07-wuh.site_about.png' width='45%'/>
  <img style="flex: 1;" src="https://src.wuh.site/2021-05/wuh.site_post_2021-06_empty.png" width='45%' />
</div>

## 开源许可
![](https://img.shields.io/github/license/stack-wuh/react-router-config)

## 启动项目
### 使用git
1. master分支，有create-react-app创建的react项目
2. v2分支为Nextjs构建的react项目

```bash
git clone -b v2 https://github.com/stack-wuh/react-router-config.git next-blog

cd next-blog
yarn

yarn run dev -p 5544
```

### 使用 docker
```bash
docker pull shadowu/wuh.site:1.5.0

docker-compose up -d
```