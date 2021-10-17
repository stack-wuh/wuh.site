import withLayout from '@/layout/layout'
import fetcher from '@/lib/fetch'
import { API_ARTICLE_LIST } from '@/constant/api'
import { PostList } from '@/components/post'
import { SWRConfig } from 'swr'
import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

export interface IHomeItemProps {
  state: string,
  type: number,
  title: string,
  sub_title: string,
  update_at: string,
  types: string[],
  keywords: string[],
  origin: string,
  cover_img: string,
  look: string,
  location: string,
  id: null
}
export type IHomeProps = {
  initialData: {
    code: number,
    msg: string,
    data: {
      count: number,
      rows: IHomeItemProps[]
    }
  }
}

const Home = (props: IHomeProps) => {
  const { initialData } = props
  return <div className="ww_home">
    <NextSeo title='wuh.site' />
    <BreadcrumbJsonLd itemListElements={[{ position: 1, name: '首页 | Home', item: 'https://wuh.site' }]} />
    <SWRConfig>
      <PostList initialData={initialData} />
    </SWRConfig>
  </div>
}

export async function getStaticProps() {
  const data = await fetcher(API_ARTICLE_LIST)

  return {
    props: {
      initialData: data
    }
  }
}

export default withLayout(Home)
