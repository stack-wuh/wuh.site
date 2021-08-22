const MobileFooter = () => {
	return (
		<div className="footer mobile-footer">
      <p>
        ©2021. Shadow
      </p>
			<style jsx>{`
				.mobile-footer {
					width: 100%;
					height: 60px;
          max-height: 60px;
					border-top: var(--border-base);
					font-size: 14px;
					text-align: center;
					transition: var(--transition-base);
				}
			`}</style>
		</div>
	);
};

export default MobileFooter;
