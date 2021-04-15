import Router from 'next/router'
import NProgress from 'nprogress'
import ErrorBoundary from '@/components/ErrorBoundary'

import '../public/animate.css'
import '../public/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (<>
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  </>)
}

export default App