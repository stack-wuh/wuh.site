import withLayout from '@/layout/layout'
import fetcher from '@/lib/fetch'
import { API_ARTICLE_LIST } from '@/constant/api'
import { PostList } from '@/components/post'
import { Button } from '@/components/button'
import { SWRConfig } from 'swr'

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
    <SWRConfig>
      <PostList initialData={initialData} />
      <Button type='link' icon='icon-affix-left' onClick={() => { console.log('btn has clicked') }}>h</Button>
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
