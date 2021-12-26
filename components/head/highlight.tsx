import Head from 'next/head'
import Script from 'next/script'

const Highlight = () => {
  return (
    <>
      <Head>
        <link
          id="theme-hljs-id"
          rel="stylesheet"
          href="https://src.wuh.site/stylesheet/github.min.css"
        />
      </Head>
      <Script src="https://src.wuh.site/scripts/highlight.min.js" />
      <Script src="https://src.wuh.site/scripts/highlight.js" />
    </>
  )
}

export default Highlight
