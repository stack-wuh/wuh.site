import Router from 'next/router'
import NProgress from 'nprogress'
import ErrorBoundary from '@/components/ErrorBoundary'
import CookieProvider from '@/components/CookieProvider'
import { RecoilRoot } from 'recoil'

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
      <RecoilRoot>
        <CookieProvider>
          <Component {...pageProps} />
        </CookieProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </>)
}

export default App