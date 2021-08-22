import { useEffect } from 'react'
import { useExternal } from 'ahooks';
import Router from "next/router";
import NProgress from "nprogress";
import ErrorBoundary from "@/components/ErrorBoundary";
import CookieProvider from "@/components/CookieProvider";
import AudioProvider from "@/components/AudioProvider";
import { RecoilRoot } from "recoil";

import "../public/animate.css";
import "../public/nprogress.css";
import "../styles/layout-v2.css";

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const sleep = (duration = 300) => new Promise(rs => setTimeout(rs, duration))

const App = ({ Component, pageProps }) => {
  const googleIcon = useExternal('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap')
  const preloadImgs = useExternal('/preload.img.css')
  useEffect(() => {
    window.addEventListener('load', async () => {
      await googleIcon[1].load()
      await sleep()
      await preloadImgs[1].load()
    })
  }, [])
	return (
		<>
			<ErrorBoundary>
				<RecoilRoot>
					<CookieProvider>
						<AudioProvider>
							<Component {...pageProps} />
						</AudioProvider>
					</CookieProvider>
				</RecoilRoot>
			</ErrorBoundary>
		</>
	);
};

export default App;
