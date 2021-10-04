import React, { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetch'
import { useRouter } from 'next/router'
import { API_ARTICLE_ITEM } from '@/constant/api'
import { PostHeader, PostBody, PostContext } from '@/components/post'
import withLayout from '@/layout/layout'

const Detail: React.FC<{}> = () => {
  const router = useRouter()
  const { data, error } = useSWR(`${API_ARTICLE_ITEM}${router.query.id}`, fetcher)
  if (error) return <div className="error">ERROR</div>
  if (!data) return <div className="loading">Loading...</div>

  return <div className="ww_detail">
    <PostContext value={data.data}>
      <PostHeader />
      <PostBody />
    </PostContext>
  </div>
}

export default withLayout(Detail)