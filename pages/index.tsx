import withLayout from '@/layout/layout'
import fetcher from '@/lib/fetch'
import { API_ARTICLE_LIST, API_BANNER_HOME } from '@/constant/api'
import { PostList } from '@/components/post'
import BannerPost from '@/components/banner/post'
import swr, { SWRConfig } from 'swr'
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

type datasType = {
  bannerList?: rowItem[],
}
const useFetchData = (): datasType => {
  const { data: banner } = swr(API_BANNER_HOME, fetcher)
  const initRes = {
    bannerList: [],
  }

  if (!banner || !banner.data || banner.error) return initRes

  return {
    bannerList: banner.data.rows,
  }
}

const Home = (props: IHomeProps) => {
  const { initialData } = props
  const datas = useFetchData()

  return <div className="ww_home">
    <NextSeo title='wuh.site -- 日积跬步, 以致千里·wuh.site' />
    <BreadcrumbJsonLd itemListElements={[{ position: 1, name: '首页 | Home', item: 'https://wuh.site' }]} />
    <SWRConfig>
      {
        datas?.bannerList && (<BannerPost data={datas.bannerList} />)
      }
      <PostList initialData={initialData} bannerList={[]} />
    </SWRConfig>
  </div>
}

export async function getStaticProps() {
  const data = await fetcher(API_ARTICLE_LIST)

  return {
    props: {
      initialData: data,
    }
  }
}

export default withLayout(Home)
