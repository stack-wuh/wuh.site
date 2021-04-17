import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { icon as iconLink } from '@/lib/icon'

export default class MyDocument extends Document {  
  render() {
    return (
      <Html lang="zh-cn">
        <Head>
          <meta name='google' content='nositelinkssearchbox' />
          <meta name='author' content="shadow, wuh131420@foxmail.com" />
          <meta name='copyright' content='© shadow' />
          <meta name='renderer' content='webkit' />
          <meta httpEquiv="cache-control" content="no-cache"></meta>

          <link href="https://src.wuh.site/common/rss.xml" type="application/rss+xml" rel="alertnate" title="RSS" />
          <link href='/reset.css' type='text/css' rel='stylesheet' />
          <link href="/theme-light.css" type='text/css' rel='stylesheet' />
          <link href={iconLink} rel='stylesheet' title='iconfont' />

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
          
          <style dangerouslySetInnerHTML={{
            __html: `
            html, body {
              margin: 0;
              padding: 0;
            }
            `
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