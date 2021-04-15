import Link from 'next/link'
import Image from 'next/image'
import { useSWRInfinite } from 'swr'
import fetcher from '@/lib/fetch'
import LoadmoreButton from '@/components/button/loadmore'

const PAGE_SIZE = 10

export function usePostPages ({ initialData }) {
  return useSWRInfinite((index, previousPageData) => {
    if (previousPageData && previousPageData.data.rows.length === 0) return null

    if (index === 0) {
      return `https://api.wuh.site/articles?p=1`
    }
    return `https://api.wuh.site/articles?p=${index+1}`
  }, fetcher, { initialData })
}

const ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ITEM_THEME_MAPS = {
  'Github': 'is-github',
  '语雀': 'is-yuque'
}

const ItemRender = ({ title, sub_title, cover_img, origin, _id }) => (<Link href={`post/2021-04/${encodeURIComponent(title)}`}>
  <a className="e-outer" rel='next' href={`https://wuh.site/post/${_id}`} role='listitem' tabIndex='0' aria-hidden="true">
    <li className='e-item'>
      <div className={["e-left", ITEM_THEME_MAPS[origin]].join(' ')} data-origin={origin} >
        <Image 
          loader={ImageLoader}
          loading="lazy" 
          src={cover_img}
          width={160} 
          height={108} 
          alt="cover-lazy" />
      </div>
      <div className="e-body">
        <h4 className='e-body__title'>{title}</h4>
        <p className='e-body__desc'>{sub_title}</p>
      </div>
    </li>
    <style jsx global>{`
      .e-outer {
        text-decoration: none;
      }
      img {
        filter: var(--contrast-img);
      }
      li.e-item {
        display: flex;
        align-items: strench;
        height: 120px;
        padding: 6px;
        margin-bottom: 10px;
        border-radius: 3px;
        box-sizing: border-box;
        overflow: hidden;
        border: 1px solid var(--color-border);
        background-color: var(--color-background);
      }

      .e-item .e-left {
        position: relative;
        margin-right: 12px;
        transform: scale(1) ratate(0);
        transition: transform .5s ease-in;
        overflow: hidden;
      }
      .e-item .e-left::after {
        content: attr(data-origin);
        display: inline-block;
        position: absolute;
        right: -20px;
        top: 10px;
        transform: rotate(45deg);
        width: 80px;
        padding: 2px 0;
        box-sizing: border-box;
        background-color: #6f42c1;
        text-align: center;
        color: #fff;
        font-size: 13px;
      }
      .is-github::after {
        background-color: #6f42c1 !important;
      }
      .is-yuque::after {
        background-color: #30ca78 !important;
      }

      .e-body {
        display: flex;
        flex: 1;
        flex-direction: column;
        transform: translateX(0);
        transition: transform .5s ease-in;
      }

      .e-body__title {
        font-weight: 400;
        font-size: 15px;
        margin-bottom: 0;
        margin-top: 10px;
        color: var(--color-text-primary) !important;
       
      }
      .e-body__desc {
        margin: 0;
        margin-top: 14px;
        font-size: 13px;
        color: var(--color-text-less);
      }

      .e-item:last-of-type {
        margin-bottom: 10px;
      }
      li.e-item:hover {
        cursor: pointer;
        border-radius: 4px;
        border-color: #1e97f7;
        border-color: var(--color-border);
        transition: all .5s ease;
        background-color: var(--color-background-primary);
      }
      li.e-item:hover .e-left {
        transform: scale3d(1.1, 1, 1.1) rotate(-5deg);
        transition: transform .5s ease-out;
      }
      li.e-item:hover .e-body {
        transform: translateX(10px);
        transition: transform .5s ease-out;
      }
    `}</style>
    </a>
  </Link>)

const Post = ({
  initialData
}) => {
  const { data, error, size, setSize } = usePostPages(initialData)
  const posts = data ? data.reduce((acc, curr) => [...acc, ...curr.data.rows], []) : []
  const isLoadingInitial = !error && !data
  const isLoadingMore = isLoadingInitial || (data&& typeof data[size-1] === 'undefined')
  const isEmpty = data?.[0]?.data?.rows?.[0].length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.data.rows.length < PAGE_SIZE)

  const handleFetchNextPage = () => {
    setSize(size + 1)
  }

  return (<div className='b-post'>
    <ul role='list' aria-hidden="true">
      {
        posts.map((item, index) => (<ItemRender key={index} {...item} />))
      }
    </ul>
    <LoadmoreButton disabled={isReachingEnd || isLoadingMore} onClick={handleFetchNextPage} />
    <style jsx>
      {
        `
          .b-post {
            margin-bottom: 15px;
          }
          ul, li {
            padding: 0;
            margin: 0;
            list-style: none;
          }
        `
      }
    </style>
  </div>)
}

export default Post