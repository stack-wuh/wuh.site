import fetcher from '@/lib/fetch'
import withLayout from '@/layout/withLayout'
import { useSWRInfinite } from 'swr'

const Hits = ({
  init
}) => {
  const { pageSize, count } = init.data
  const { data, size, setSize, error } = useSWRInfinite((index, ...props) => {
    console.log('current is props: ', props)
    return `https://api.wuh.site/articles?p=${index+1}`
  }, fetcher, { revalidateOnFocus: false, revalidateOnMount: false, initialData: [init] })
  const isLoading = !data && !error
  const isEmpty = init.data.rows.length
  const allowLoadMore = size < Math.ceil(count / pageSize)
  if (isLoading) return <div>loading...</div>

  const list = (data||[]).reduce((acc, curr) => acc.concat(curr.data.rows), [])
  console.log(data, list, init)

  return <div>
    <h3>hello Hits size: {size}--allowLoadMore: {JSON.stringify(allowLoadMore)}</h3>  
    <button disabled={!allowLoadMore} onClick={() => setSize(size + 1)}>load more</button>
    <ul>
    </ul>
  </div>
}

export async function getStaticProps () {
  const data = await fetcher('https://api.wuh.site/articles')
  return {
    props: {
      init: data
    }
  }
}

Hits.customName = 'hits'

export default (Hits)