import Head from 'next/head'
import Post from '@/components/post'
import withLayout from '@/layout/withLayout'
import fetcher from '@/lib/fetch'
import useTitle, { DEFAULT_OPTIONS as defaultTitleOptions } from '@/hooks/useTitle'
import ImageLoop from '@/components/carousel/image'

const Home = ({
  init,
  routerItemProps
}) => {
  const { title, hiddenTitle } = routerItemProps
  useTitle({ ...defaultTitleOptions, hiddenTitle })

  return (<div>
    <Head>
      <title>{title} - wuh.site</title>
    </Head>
    <ImageLoop />
    <Post initialData={init} />

  </div>
)
}

export async function getStaticProps () {
  const data = await fetcher('https://api.wuh.site/articles')
  return {
    props: { 
      init: data
     }
  }
}

Home.customName = 'post'

export default withLayout(Home)
