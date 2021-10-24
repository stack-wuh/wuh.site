import withLayout from '@/layout/layout'
import fetcher from '@/lib/fetch'
import { API_ARTICLE_LIST, API_BANNER_HOME } from '@/constant/api'
import { PostList } from '@/components/post'
import BannerPost from '@/components/banner/post'
import { SWRConfig } from 'swr'
import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { rowItem } from '@/pages/api/banner'

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
  },
  bannerList: rowItem[]
}

const Home = (props: IHomeProps) => {
  const { initialData, bannerList } = props

  return <div className="ww_home">
    <NextSeo title='wuh.site -- 日积跬步, 以致千里·wuh.site' />
    <BreadcrumbJsonLd itemListElements={[{ position: 1, name: '首页 | Home', item: 'https://wuh.site' }]} />
    <SWRConfig>
      <BannerPost data={bannerList} />
      <PostList initialData={initialData} bannerList={[]} />
    </SWRConfig>
  </div>
}

export async function getStaticProps() {
  const data = await fetcher(API_ARTICLE_LIST)
  const bannerRes = await fetcher(API_BANNER_HOME)

  return {
    props: {
      initialData: data,
      bannerList: bannerRes.data.rows
    }
  }
}

export default withLayout(Home)
