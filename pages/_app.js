import Router from 'next/router'
import NProgress from 'nprogress'

import '../public/iconfont.css'
import '../public/animate.css'
import '../public/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (<>
      <Component {...pageProps} />
  </>)
}

export default App