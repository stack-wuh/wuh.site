import Head from 'next/head'
import Script from 'next/script'

const Highlight = () => {
  return (<>
    <Head>
      <link rel="stylesheet" href="https://src.wuh.site/stylesheet/github.min.css" />
      <link rel="stylesheet" href="https://src.wuh.site/stylesheet/github-dark.min.css" />
    </Head>
    <Script src='https://src.wuh.site/scripts/highlight.min.js' />
    <Script src='https://src.wuh.site/scripts/highlight.js' />
  </>)
}

export default Highlight