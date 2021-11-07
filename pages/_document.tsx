import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps
    }
  }

  render() {
    return (<Html lang='zh-cn' data-theme-mode='light'>
      <Head>
        <link rel="stylesheet external noreferrer" href="//at.alicdn.com/t/font_1587964_p560dxo4iei.css" />
        <link rel="stylesheet external noreferrer" href="//at.alicdn.com/t/font_2595178_wa25xow6jmp.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>)
  }
}