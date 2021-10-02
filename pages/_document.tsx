import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render () {
    return (<Html lang='en'>
      <Head>
        <meta name='author' content='shadow ©2021' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>)
  }
}