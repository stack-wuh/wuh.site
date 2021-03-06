import Link from 'next/link'
import Image from 'next/image'
import { useSWRInfinite } from 'swr'
import fetcher from '../../lib/fetch'

const PAGE_SIZE = 10

export function usePostPages () {
  return useSWRInfinite((index, previousPageData) => {
    if (previousPageData && previousPageData.data.rows.length === 0) return null

    if (index === 0) {
      return `http://api.wuh.site/articles?p=1`
    }
    return `http://api.wuh.site/articles?p=${index+1}`
  }, fetcher)
}

const ItemRender = ({ title, _id }) => (<Link href={`post/${_id}`}><li className='e-item'>
  <div className="e-left">
    <Image src='/image/avatar.jpeg' width={50} height={50} />
  </div>
  <div className="e-body">
  {title}
  </div>
  <div className="e-right">
    <span>right</span>
  </div>
   <style jsx global>
      {
        `
          .e-itme {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            border: 1px solid red;
          }
          .e-item div {
            display: inline-block;
          }

          .e-left {
            margin-right: 10px;
          }
        `
      }
   </style>
</li></Link>)

const Post = () => {
  const { data, error, size, setSize } = usePostPages()

  const posts = data ? data.reduce((acc, curr) => [...acc, ...curr.data.rows], []) : []
  const isLoadingInitial = !error && !data
  const isLoadingMore = isLoadingInitial || (data&& typeof data[size-1] === 'undefined')
  const isEmpty = data?.[0]?.data?.rows?.[0].length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.data.rows.length < PAGE_SIZE)

  return (<div className='b-post'>
    <ul>
      {
        posts.map((item, index) => (<ItemRender key={index} {...item} />))
      }
    </ul>
    <button disabled={isReachingEnd || isLoadingMore} onClick={() => setSize(size + 1)}>load more</button>
    <style jsx>
      {
        `
          .b-post {
            width: 80%;
          }
          ul, li {
            padding: 0;
            list-style: none;
          }
        `
      }
    </style>
  </div>)
}

export default Post