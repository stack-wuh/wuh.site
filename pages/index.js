import Head from 'next/head'
import Post from '@/components/post'
import withLayout from '@/layout/withLayout'
import fetcher from '@/lib/fetch'

const Home = ({
  posts
}) => (
  <div>
    <Head>
      <title>wuh.site - 你一定也想起舞吧 - wuh.site</title>
      <meta charSet='utf-8' />
      <meta keywords="前端技术博客, React 博客, Javascript, Nodejs, wuh.site" />
      <meta name='description' content='自小多才俊,向来志气高.别人有宝剑,我有笔如刀;' />
      <meta name='author' content="shadow, wuh131420@foxmail.com" />
      <meta name='copyright' content='© shadow' />
      <meta name='renderer' content='webkit' />
      <meta httpEquiv="cache-control" content="no-cache"></meta>
      <meta property='og:type' content='webpage' />
      <meta property='og:title' content='技术博客 -- wuh.site' />
      <meta property='og:url' content='https://wuh.site' />
      <meta property='og:description' content='前端技术博客, 分享我的知识' />
      <meta property='og:image' content='https://src.wuh.site/common/avatar.jpg' />
      <meta property='og:locale' content='zh-cn' />
    </Head>

    <Post initialData={posts} />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export async function getStaticProps () {
  const posts = await fetcher('https://api.wuh.site/articles')

  return {
    props: { posts }
  }
}

export default withLayout(Home)
