import Footer from "@/components/footer/index";
import Menu from "@/components/menu";
import Leave from "@/components/button/leave";
import Share from "@/components/button/share";
import Theme from "@/components/button/theme";
import Gallery from "@/components/button/gallery";
import Popup from "@/components/popup";
import Transition from "@/components/transition";
import CustomMeta from "@/components/custom-meta";
import dynaimc from "next/dynamic";
import { ConfigProvider } from "@/components/ConfigProvider";
import { useResponsive } from "ahooks";
import MobileHeader from '@/components/header/mobile';
import classNames from "classnames";

import config from "../global.config.json";

const DynaimcHeader = dynaimc(import("@/components/header/header"), { ssr: false });

const Provider = ({ value, tag, children }) => (
	<ConfigProvider value={value}>
		<div className={classNames("layout", `layout-${tag}`)}>
			<div className="background"></div>
			{children}
		</div>
	</ConfigProvider>
);

const Layout = (Component) => {
	const initialConfig = {
		theme: "light",
		...config,
	};
	const { customName = "default", customTitle = false } = Component;

	const RouterItemProps = config["pages_title"][customName];

	return (props) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const responsive = useResponsive();
		const {
			xs = false,
			sm = false,
			md = false,
			lg = false,
			xl = false,
		} = responsive || {};
		const isMobile = [xs, sm].includes(true);
		const isTablet = [md].includes(true);
		const isPc = [lg, xl].includes(true);

		if (isPc) {
			return (
				<Provider value={initialConfig} tag="pc">
					<div className="config">
						<Leave />
						<Share />
						<Theme />
						<Gallery />
						<Popup />
					</div>
					<div className="app-root">
						<header className="header">
							<DynaimcHeader />
						</header>
						<main className="main-container is-pc">
							<div className="main-nav">
								<Menu />
							</div>
							<div className="main pc-main">
								<Transition>
									<CustomMeta
										{...RouterItemProps}
										customName={customName}
										customTitle={customTitle}
									>
										<Component {...props} routerItemProps={RouterItemProps} />
									</CustomMeta>
								</Transition>
							</div>
							<div className="main-aside"></div>
						</main>
						<footer className="footer">
							<Footer />
						</footer>
					</div>
				</Provider>
			);
		}

		if (isTablet) {
			return (
				<Provider value={initialConfig} tag="tablet">
					<div className="app-root">
            <header className="header">
              <MobileHeader />
            </header>
						<main className="tablet-main is-tablet">
              <Transition>
                <Component {...props} routerItemProps={RouterItemProps} />
              </Transition>
            </main>
						<footer className="footer">
							<Footer.Mobile />
						</footer>
					</div>
				</Provider>
			);
		}

		if (isMobile) {
			return (
				<Provider value={initialConfig} tag="mobile">
					<div className="app-root">
            <header className="header">
              <MobileHeader />
            </header>
						<main className="mobile-main is-mobile">
              <Component {...props} routerItemProps={RouterItemProps} />
            </main>
						<footer className="footer">
							<Footer.Mobile />
						</footer>
					</div>
				</Provider>
			);
		}

		return null;
	};
};

export default Layout;
