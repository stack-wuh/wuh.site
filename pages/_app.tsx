import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import Script from 'next/script';
import NProgress from "nprogress";
import ErrorBoundary from "@/components/ErrorBoundary";
import ThemeScript from '@/components/head/theme';
import BubbleScript from '@/components/head/bubble';
import HighlightScript from '@/components/head/highlight';
import SlideHead from '@/components/head/slide';
import { ConfigProvider } from "@/hooks/useConfig";
import "@/styles/index.scss";
import { config } from '@/constant/config'
import * as gtag from '@/lib/gtag'
import * as highlight from '@/lib/highlight'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { DefaultSeo, FAQPageJsonLd, LogoJsonLd } from 'next-seo'
import SEOConfig, { FAQConfig, LogoConfig } from '../next-seo.config'


Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
  gtag.pageview(url);
  highlight.formatter(url)
});
Router.events.off('routeChangeComplete', (url) => {
  gtag.pageview(url);
})
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

type NextPageWithLayout = NextPage & {
  getLayout?: (Component: ReactElement) => ReactNode;
};
type NextPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router }: NextPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <ErrorBoundary>
      <DefaultSeo {...SEOConfig} />
      <FAQPageJsonLd mainEntity={FAQConfig.mainEntity} />
      <LogoJsonLd url={LogoConfig.url} logo={LogoConfig.logo} />
      <Script
        id='gtag'
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
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
        <SwitchTransition>
          <CSSTransition key={router.asPath} classNames='page-transition' timeout={3000} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
            {layout}
          </CSSTransition>
        </SwitchTransition>
      </ConfigProvider.Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
