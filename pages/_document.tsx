import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (<Html lang='en' data-theme-mode='light'>
      <Head>
        <meta name='author' content='吴尒红 <wuh131420@foxmail.com>' />
        <link rel="stylesheet external noreferrer" href="//at.alicdn.com/t/font_1587964_7d319bqcbhx.css" />
        <link rel="stylesheet external noreferrer" href="//at.alicdn.com/t/font_2595178_wa25xow6jmp.css" />
        <link rel="stylesheet external noreferrer" href="//fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>)
  }
}