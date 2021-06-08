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
          <meta name='author' content="shadow, wuh131420@foxmail.com" />
          <meta name='copyright' content='© shadow' />
          <meta name='renderer' content='webkit' />
          <meta httpEquiv="cache-control" content="no-cache"></meta>

          <link href="https://src.wuh.site/common/rss.xml" type="application/rss+xml" rel="alertnate" title="RSS" />
          <link href='/reset.css' type='text/css' rel='stylesheet' />
          <link href="/theme-light.css" type='text/css' rel='stylesheet' />
          <link href={iconLink} rel='stylesheet' title='iconfont' />
          <link href={iconColorLink} type='text/css' rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}