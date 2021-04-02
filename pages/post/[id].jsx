import { useEffect } from 'react'
import fetch from '@/lib/fetch'
import markdownToHtml from '@/lib/markdownToHtml'
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import Divider from '@/components/divider'
import ContackButton from '@/components/button/contack'
import withLayout from '@/layout/withLayout'

const Post = ({
  post
}) => {
  const { body, title, sub_title, cover_img, _id } = post

  useEffect(() => {
    if (global || window) {
      global.addEventListener('click', e => {
        if (e.target.nodeName.toLowerCase() === 'img') {
          window.open(e.target.currentSrc)
        }
      })
    }

    return () => {
      global.removeEventListener('click', () => {}, false)
    }
  }, [])

  return (<div>
      <article>
        <PostHeader {...post} />
        <PostBody body={body} />
      </article>
      <Divider />
      <ContackButton title={title} subTitle={sub_title} coverImage={cover_img} url={`/post/${_id}`} />
      <Divider />
  </div>)
}

export async function getServerSideProps (context) {
  const res = await fetch('https://api.wuh.site/articles/'+context.query.id)
  const row = res.data
  const body = await markdownToHtml(row.content || '')

  return {
    props: {
      post: {
        ...row,
        body
      }
    }
  }
}
export default withLayout(Post, { allowSlide: false })