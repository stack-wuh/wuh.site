import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Router from 'next/router'
import Script from 'next/script'
import React from 'react'
import NProgress from 'nprogress'
import ErrorBoundary from '@/components/ErrorBoundary'
import ThemeScript from '@/components/head/theme'
import BubbleScript from '@/components/head/bubble'
import HighlightScript from '@/components/head/highlight'
import SlideHead from '@/components/head/slide'
import ReduxProvider from '@/components/ReduxProvider'
import { ConfigProvider } from '@/hooks/useConfig'
import { AudioProvider } from '@/hooks/useAudio'
import '@/styles/index.scss'
import { config } from '@/constant/config'
import * as gtag from '@/lib/gtag'
import * as highlight from '@/lib/highlight'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { DefaultSeo, FAQPageJsonLd, LogoJsonLd } from 'next-seo'
import WithDynamic from '@/layout/withDynamic'

import SEOConfig, { FAQConfig, LogoConfig } from '../next-seo.config'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', url => {
  NProgress.done()
  gtag.pageview(url)
  highlight.formatter(url)
})
Router.events.off('routeChangeComplete', url => {
  gtag.pageview(url)
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

type NextPageWithLayout = NextPage & {
  getLayout?: (Component: ReactElement) => ReactNode
}
type NextPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps, router }: NextPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)
  const layout = getLayout(<Component {...pageProps} />)

  return (
    <ReduxProvider>
      <ErrorBoundary>
        <DefaultSeo {...SEOConfig} />
        <FAQPageJsonLd mainEntity={FAQConfig.mainEntity} />
        <LogoJsonLd url={LogoConfig.url} logo={LogoConfig.logo} />
        <Script
          id="gtag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <SlideHead />
        <ThemeScript />
        <BubbleScript />
        <HighlightScript />
        <ConfigProvider.Provider value={config}>
          <AudioProvider>
            <SwitchTransition mode="out-in">
              <CSSTransition
                in={router.asPath === '/'}
                key={router.asPath}
                classNames="page-transition"
                timeout={1000}
                unmountOnExit
                onEntered={() => {
                  if (router.asPath === '/') {
                    const target = document.querySelector('html')
                    const scrollTop = target?.getAttribute('scroll')
                    if (scrollTop) {
                      window.scrollTo(0, Math.abs(+scrollTop))

                      setTimeout(() => {
                        target?.setAttribute('scroll', ' ')
                      })
                    }
                  }
                }}
                onExiting={node => {
                  if (router.asPath.startsWith('/post')) {
                    const rect = node.getBoundingClientRect()
                    document
                      .querySelector('html')
                      ?.setAttribute('scroll', `${rect.y}`)
                  }
                }}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false)
                }}>

                <WithDynamic>{layout}</WithDynamic>
              </CSSTransition>
            </SwitchTransition>
          </AudioProvider>
        </ConfigProvider.Provider>
      </ErrorBoundary>
    </ReduxProvider>
  )
}

export default React.memo(MyApp)
