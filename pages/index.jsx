import Post from "@/components/post";
import withLayout from "@/layout/withLayout";
import fetcher from "@/lib/fetch";
import ImageLoop from "@/components/carousel/image";
import { API_ARTICLE_LIST } from '@/constant/api'

const Home = ({ init }) => {
	return (<>
		<div>
			<ImageLoop />
			<Post initialData={init} />
		</div>
	</>);
};

export async function getStaticProps() {
	const data = await fetcher(API_ARTICLE_LIST);
	return {
		props: {
			init: data,
		},
	};
}

Home.customName = "post";

export default withLayout(Home);
