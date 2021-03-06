import fetch from '../../lib/fetch'
import markdownToHtml from '../../lib/markdownToHtml'

const Post = ({
  post
}) => {
  const { title, body } = post
  return (<div>
      <article>
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: body }} />
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
export default Post