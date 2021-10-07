import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import Script from 'next/script';
import NProgress from "nprogress";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ConfigProvider } from "@/hooks/useConfig";
import "@/styles/index.scss";
import { config } from '@/constant/config'
import * as gtag from '@/lib/gtag'

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
  gtag.pageview(url);
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

function MyApp({ Component, pageProps }: NextPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <ErrorBoundary>
      <Script
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
      <ConfigProvider.Provider value={config}>{layout}</ConfigProvider.Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
