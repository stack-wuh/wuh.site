import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document'
import { config } from '@/constant/config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const cookies = ctx.req?.headers.cookie?.replace(/;./gi, '&')
    const cookieSchema = new URLSearchParams(cookies)

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
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>)
  }
}