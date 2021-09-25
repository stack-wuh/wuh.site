const ServeError = () => {
  return (<div className='page'>
    <h3>服务器错误</h3>
    <style jsx>{`
      .page {
        width: 100%;
        margin: 10%;
        padding: 10%;
        border-box: box-sizing;
        background-color: #fff;
        box-shadow: 10px 10px 0 #ccc;
      }
    `}</style>
  </div>)
}

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default ServeError