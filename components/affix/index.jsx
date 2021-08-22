import classnames from 'classnames'

const Affix = ({ top, right, bottom, left, style, className, children }) => {
	const initialStyle = {
		top,
		right,
		bottom,
		left,
	};

	const styles = style ?? initialStyle;

	return (
		<div className={classnames('affix', className)} style={styles}>
			{children}
			<style jsx>{`
				.affix {
					position: fixed;
          z-index: 999;
					width: auto;
					height: auto;
					padding: 0;
					margin: 0;
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export default Affix;
