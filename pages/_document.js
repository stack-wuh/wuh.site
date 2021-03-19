import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '@/lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-cn" data-theme-mode='light'>
        <Head>
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
          <style dangerouslySetInnerHTML={{
            __html: `[data-theme-mode='light'] {
              --primary-color: #0875e6;

             /*** 文字类型 ***/
              --color-text-primary: #24292e;

              /**** 背景色 *****/
              --color-background-primary: #fffcfa;
            }
            
            [data-theme-mode='dark'] {
              --primary-color: #002766;
              
              /******* 文字类型 *******/
              --color-text-primary: #c9d1d9;

              /******* 背景色 *******/
              --color-background-primary: #090c10;
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