import { useEffect, useRef } from 'react'
import fetch from '@/lib/fetch'
import markdownToHtml from '@/lib/markdownToHtml'
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import Divider from '@/components/divider'
import ContackButton from '@/components/button/contack'
import Empty from '@/components/empty'
import Alert from '@/components/alert'
import withLayout from '@/layout/withLayout'
import useTitle, { DEFAULT_OPTIONS as defaultOptions } from '@/hooks/useTitle'

const emptyWrapper = (<Empty.Post />)

const Post = ({
  post,
  routerItemProps
}) => {
  const postRef = useRef(null)
  const { body, title, sub_title, cover_img, _id } = post
  const { hiddenTitle } = routerItemProps
  useTitle({ ...defaultOptions, hiddenTitle, customTitle: title, allowCustom: true })

  useEffect(() => {
    if (global || window) {
      postRef.current.addEventListener('click', e => {
        if (e.target.nodeName.toLowerCase() === 'img') {
          window.open(e.target.currentSrc)
        }
      })
    }
  }, [])

  const bodyWrapper = (<article>
    <PostHeader {...post} />
    <PostBody body={body} />
  </article>)

  return (<div className='post-info' ref={postRef}>
      {
        body.length ? bodyWrapper : emptyWrapper
      }
      
      <Alert title="版权声明: 署名-非商业性使用-禁止演绎 3.0 中国大陆(CC BY-NC-ND 3.0 CN)" description="文章首发于 Shadow's Blog ， 转载文章请务必以超链接形式标明文章出处，作者信息及本版权声明。" />
      <Divider />
      <ContackButton title={title} subTitle={sub_title} coverImage={cover_img} url={`/post/${_id}`} />
      <Divider />
  </div>)
}

Post.customName = 'post_info'
Post.customTitle = true

export async function getServerSideProps (context) {
  const [_, title] = context.query.all
  const res = await fetch('https://api.wuh.site/articles/'+ encodeURIComponent(title))
  const row = res.data
  const body = await markdownToHtml(row.content)
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