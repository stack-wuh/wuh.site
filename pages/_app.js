import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'

import '../public/iconfont.css'
import '../public/animate.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (<>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default App