import Footer from "@/components/footer/index";
import Transition from "@/components/transition";
import CustomMeta from "@/components/custom-meta";
import dynaimc from "next/dynamic";
import { ConfigProvider } from "@/components/ConfigProvider";
import { useResponsive } from "ahooks";
import classNames from "classnames";

import config from "../global.config.json";

const DynaimcHeader = dynaimc(import("@/components/header/header"), {
	ssr: false,
});

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
			const DynamicMenu = dynaimc(import("@/components/menu"));
			const DynamicLelve = dynaimc(import("@/components/button/leave"));
			const DynamicShare = dynaimc(import("@/components/button/share"));
			const DynamicTheme = dynaimc(import("@/components/button/theme"));
			const DynamicGallery = dynaimc(import("@/components/button/gallery"));
			const DynamicPopup = dynaimc(import("@/components/popup"));

			return (
				<Provider value={initialConfig} tag="pc">
					<div className="config">
						<DynamicLelve />
						<DynamicShare />
						<DynamicTheme />
						<DynamicGallery />
						<DynamicPopup />
					</div>
					<div className="app-root">
						<header className="header">
							<DynaimcHeader />
						</header>
						<main className="main-container is-pc">
							<div className="main-nav">
								<DynamicMenu />
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
			const DynaimcMobileHeader = dynaimc(
				import("@/components/header/mobile"),
				{ ssr: false }
			);

			return (
				<Provider value={initialConfig} tag="tablet">
					<div className="app-root">
						<header className="header">
							<DynaimcMobileHeader />
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
			const DynaimcMobileHeader = dynaimc(
				import("@/components/header/mobile"),
				{ ssr: false }
			);

			return (
				<Provider value={initialConfig} tag="mobile">
					<div className="app-root">
						<header className="header">
							<DynaimcMobileHeader />
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
