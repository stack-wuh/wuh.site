import React from 'react'
import withLayout from '@/layout/layout'
import fetcher from '@/lib/fetch'
import { API_ARTICLE_LIST, API_BANNER_HOME } from '@/constant/api'
import { PostList } from '@/components/post'
import BannerPost from '@/components/banner/post'
import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { rowItem } from '@/pages/api/banner'

export interface IHomeItemProps {
  state: string
  type: number
  title: string
  sub_title: string
  update_at: string
  types: string[]
  keywords: string[]
  origin: string
  cover_img: string
  look: string
  location: string
  id: null
}

export type THomeIntialProps = {
  code: number
  msg: string
  data: {
    count: number
    rows: IHomeItemProps[]
    current: number
    pageSize: number
  }
}

export type IHomeProps = {
  articleList: IHomeItemProps[]
  bannerList: rowItem[]
  articleCount: number
  initialData: THomeIntialProps
}

const Home = (props: IHomeProps) => {
  const { articleCount, bannerList, initialData } = props

  return (
    <div className="ww_home">
      <NextSeo title="wuh.site -- 日积跬步, 以致千里·wuh.site" />
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: '首页 | Home', item: 'https://wuh.site' },
        ]}
      />
      {bannerList && <BannerPost data={bannerList} />}
      <PostList data={initialData} count={articleCount} />
    </div>
  )
}

export async function getStaticProps() {
  const article = await fetcher(`${API_ARTICLE_LIST}`)
  const banner = await fetcher(`${API_BANNER_HOME}`)

  return {
    props: {
      initialData: article,
      articleCount: article.pager.count || 0,
      bannerList: banner.hits || [],
    },
  }
}

export default React.memo(withLayout(Home))
