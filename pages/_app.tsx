import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import NProgress from "nprogress";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ConfigProvider } from "@/hooks/useConfig";
import "@/styles/index.scss";
import { config } from '@/constant/config'

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
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
      <ConfigProvider.Provider value={config}>{layout}</ConfigProvider.Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
