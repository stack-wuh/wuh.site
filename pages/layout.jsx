import withLayout from "@/layout/withLayout";

const SSS = () => {
	return <div className="hello">hello world!!!!</div>;
};

export function getStaticProps() {
	return {
		props: {},
	};
}
export default withLayout(SSS);
