import fetch from '@/lib/fetch'
import markdownToHtml from '@/lib/markdownToHtml'
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import withLayout from '@/layout/withLayout'

const Post = ({
  post
}) => {
  const { body } = post
  return (<div>
      <article>
        <PostHeader {...post} />
        <PostBody body={body} />
      </article>
  </div>)
}

export async function getServerSideProps (context) {
  const res = await fetch('http://api.wuh.site/articles?_id='+context.query.id)
  const row = res.data.rows[0]
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
export default withLayout(Post)