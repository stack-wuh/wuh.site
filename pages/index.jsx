import Post from "@/components/post";
import withLayout from "@/layout/withLayout";
import fetcher from "@/lib/fetch";
import ImageLoop from "@/components/carousel/image";

const Home = ({ init }) => {
	return (<>
		<div>
			<ImageLoop />
			<Post initialData={init} />
		</div>
	</>);
};

export async function getStaticProps() {
	const data = await fetcher("https://api.wuh.site/articles");
	return {
		props: {
			init: data,
		},
	};
}

Home.customName = "default";

export default withLayout(Home);
