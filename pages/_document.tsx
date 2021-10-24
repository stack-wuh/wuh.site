import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document'
import { config } from '@/constant/config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const cookies = ctx.req?.headers.cookie?.replace('; ', '&')
    const cookieSchema = new URLSearchParams(cookies)
    console.group('cookie')
    console.log('cookies', ctx.req?.headers)
    console.log('theme', cookieSchema.get('data-theme-mode'))
    console.log('lang', cookieSchema.get('lang'))
    console.groupEnd()

    return {
      ...initialProps,
      theme: cookieSchema.get('data-theme-mode') || config.themeMode,
      lang: cookieSchema.get('lang') || config.language
    }
  }

  render() {
    const { theme, lang } = this.props as any
    return (<Html lang={lang} data-theme-mode={theme}>
      <Head>
        <link rel="stylesheet external noreferrer" href="//at.alicdn.com/t/font_1587964_p560dxo4iei.css" />
        <link rel="stylesheet external noreferrer" href="//at.alicdn.com/t/font_2595178_wa25xow6jmp.css" />
        {/* <link rel="stylesheet external noreferrer" href="//fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>)
  }
}