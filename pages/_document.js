import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-cn" data-theme-mode='light'>
        <Head>
          <meta name='google' content='nositelinkssearchbox' />
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
            __html: `[data-theme-mode='light'] {
              --primary-color: #0875e6;

             /*** 文字类型 ***/
              --color-text-primary: #24292e;
              --color-text-less: #333;

              /**** 背景色 *****/
              --color-background-primary: #fffcfa;
              --color-background-revert: #fff;

              /****** Header ******/
              --color-background-header: rgb(255 255 255 / 52%);
              --color-shadow: rgb(238 238 238 / 30%);

              /***** Nav *****/
              --color-background-nav: rgb(255 255 255 / 50%);
              --color-background-item: #f3f3f3;;
              --color-background-active-nav: rgb(100 100 100 / 40%);

              /*****  Border  ****/
              --color-border: #eee;
              --color-border-pain: rgb(255 255 255);

              --contrast-img: contrast(1);
            }
            
            [data-theme-mode='dark'] {
              --primary-color: #f0f6fc;
              
              /******* 文字类型 *******/
              --color-text-primary: #58a6ff;
              --color-text-less: #b3b8bd;

              /******* 背景色 *******/
              --color-background-primary: #090c10;
              --color-background-revert: #fffcfa;

              /******** Header *********/
              --color-background-header: rgb(0 0 0 / 52%);
              --color-shadow: rgb(17 17 17 / 70%);

              /***** Nav *****/
              --color-background-nav: #736f6f;
              --color-background-active-nav: rgb(255 255 255 / 60%);

              /***   Border    ***/
              --color-border: #8e8c8c;
              --color-border-pain: rgb(0 0 0);

              --contrast-img: contrast(.5);
            }

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