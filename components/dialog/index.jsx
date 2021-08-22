import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

const Dialog = ({
	children,
	visible,
	onCancel,
	allowCloseIcon,
	title,
	bodyStyle,
	dialogStyle,
	wrapperStyle,
	position,
	headerRender,
}) => {

  const handlePrograCancel = (e) => {
    e.stopPropagation()
    onCancel()
  }
	const header = () =>
		headerRender ? (
			headerRender()
		) : (
			<>
				<div className="dialog__header">
					<span role="label" aria-label="Dialog" className="dh__title">
						<i className="iconfont-color iconhangkonghangtian-leidaradars" />
						&nbsp;{title}&nbsp;
						<i className="iconfont-color iconhangkonghangtian-leidaradars" />
					</span>
					{allowCloseIcon && (
						<span
							onClick={onCancel}
							role="button"
							className="dh__icon iconfont icon-searchclose"
						/>
					)}
				</div>
			</>
		);

	const outerRender = (
		<CSSTransition in={visible} timeout={500} className="drawger" unmountOnExit>
			<dialog id="dialog" open={visible} style={dialogStyle}>
				<div className="dialog__outer" onClick={handlePrograCancel}>
					<div
						className="dialog__inner"
						onClick={e => e.stopPropagation()}
						style={wrapperStyle}
					>
						{header}
						<div className="dialog__body" style={bodyStyle}>
							{children}
						</div>
					</div>
				</div>
				<style jsx global>{`
					dialog#dialog {
						position: fixed !important;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						width: 100vw;
						height: 100vh;
						padding: 0;
						color: var(--color-base-10);
						box-sizing: border-box;
						background-color: rgba(0, 0, 0, 0.4);
						border: none;
						z-index: 999999 !important;
						transition: var(--transition-base);
					}

					.dialog__inner {
						display: flex;
						flex-direction: column;
						width: 80%;
						height: auto;
						min-height: calc(100vh - 36px);
						margin: ${position ? 0 : "18px auto"};
						color: inherit;
						border-radius: var(--border-radius-base);
						background-color: var(--color-base-1);
						transition: var(--transition-base);
						overflow: hidden;
						border: 1px solid var(--color-base-5);
					}

					.dialog__header {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 60px;
						width: 100%;
						padding: 18px;
						border-bottom: 1px solid var(--color-base-5);
						box-sizing: border-box;
						background-color: var(--color-gray-3);
					}

					.dialog__header .dh__icon {
						padding: 0.5em;
						font-size: 20px;
					}
					.dialog__header .dh__icon:hover {
						cursor: pointer;
					}

					.dialog__body {
						flex: 1;
						height: 80vh;
						padding: calc(var(--padding-base) * 2);
						background-color: var(--color-base-1);
						color: inherit;
					}

					.drawger-enter {
						opacity: 0;
						transform: scale(0.9);
					}
					.drawger-enter-active {
						opacity: 1;
						transform: translateX(0);
						transition: opacity 300ms, transform 300ms;
					}
					.drawger-exit {
						opacity: 1;
					}
					.drawger-exit-active {
						opacity: 0;
						transform: scale(0.9);
						transition: opacity 300ms, transform 300ms;
					}
				`}</style>
			</dialog>
		</CSSTransition>
	);

	return ReactDom.createPortal(outerRender, document.querySelector("body"));
};

Dialog.defaultProps = {
	children: null,
	visible: false,
	onCancel() {},
	allowCloseIcon: true,
	title: "Dialog",
};

export default typeof document !== "undefined" ? Dialog : () => null;
