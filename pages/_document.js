import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { icon as iconLink, iconColor as iconColorLink } from '@/lib/icon'
import qs from 'querystring'

export default class MyDocument extends Document {  
  static async getInitialProps(ctx) {
    const intialProps = await Document.getInitialProps(ctx)
    const cookies = qs.parse(ctx.req.headers.cookie, ';')
    
    return {
      ...intialProps,
      dataThemeMode: cookies[' data-theme-mode']
    }
  }

  render() {
    return (
      <Html lang="zh-cn" data-theme-mode={this.props.dataThemeMode}>
        <Head>
          <meta name='google' content='nositelinkssearchbox' />
          <meta name='author' content="shadow, shadow.wu, 吴尒红, wuh131420@foxmail.com" />
          <meta name='copyright' content='© shadow' />
          <meta name='renderer' content='webkit' />
          <meta httpEquiv="cache-control" content="no-cache"></meta>

          <link href="https://src.wuh.site/common/rss.xml" type="application/rss+xml" rel="alertnate" title="RSS" />
          <link href='/reset.css' type='text/css' rel='stylesheet' />
          <link href="/theme-light.css" type='text/css' rel='stylesheet' />
          <link href={iconLink} rel='stylesheet' title='iconfont' />
          <link href={iconColorLink} type='text/css' rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* 结构化数据 -- 面包屑 */}
          <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html: `
              [{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://wuh.site"
                },{
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Home·集合",
                  "item": "https://wuh.site/"
                }]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://wuh.site"
                },{
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Home·关于我的",
                  "item": "https://wuh.site/about"
                }]
              },{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://wuh.site"
                },{
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Home·源代码",
                  "item": "https://github.com/stack-wuh/react-router-config/tree/v2"
                }]
              },{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://wuh.site"
                },{
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Home·文档指南",
                  "item": "https://docs.wuh.site/"
                }]
              }]`
          }} />

          {/* 结构化数据 -- LOGO */}
          <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html : `{ 
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://wuh.site",
              "logo": "https://wuh.site/avatar.png"
            }`
          }} />

          {/* 结构化数据 -- Search */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://wuh.site",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wuh.site?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`
          }} />

          {/* 结构化数据 -- FAQ */}
          <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                  {
                      "@type": "Question",
                      "name": "我为什么选择了Docker+Nginx来部署我的个人应用?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "<p>在去年我上线了一个前后端分离的博客项目, 后台服务用的是Express, 在当时我选择了PM2来启动我的Node服务. 为什么会需要PM2呢?NodeJS是一个基于V8的运行时环境, 当我们打开一个shell面板, 输入启动指令 npm run start, 程序开始运行在机器后台, 这个时候我们可以通过服务占用的端口号, 找到这个进程.可以访问我的这一篇博客来查看详细内容。</p>"
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "为什么Javascript的继承可以这么玩?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "这两天没事，在翻看红宝书的继承篇，重新学习了一下下js中的继承。出于对Es6中class 类继承的好奇，我在babel里面试了一下，才发现Es6中class类继承，实际是寄生组合式继承，也是一下我要介绍的一种。"
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "为什么React既简单有困难?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "<p>将所有的数据源维护在一个JSON数据中，用函数去处理筛选的逻辑，从而得到我们在当前页所需要的数据结构。Antd中的有一个仓库ProTable，ProTable是一个集合了查询、表格和分页的多功能复合型组件，它将Search部分以及Table部分的数据都维护在一份JSON数据中，用不同的参数去驱动UI。</p>"
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "如何联系我?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "提供一下几种方法: <ul><li>email: wuh131420@foxmail.com</li><li>qq: 724132485</li><li>github: stack-wuh</li></ul>"
                      }
                  }
              ]
          }`
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}