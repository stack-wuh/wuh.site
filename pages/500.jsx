const ServeError = () => {
  return (<div>
    <h3>服务器错误</h3>
  </div>)
}

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default ServeError