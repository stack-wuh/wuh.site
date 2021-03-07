import Head from 'next/head'
import dayjs from 'dayjs'

const PostTitle = ({ title, sub_title, update_at, keywords, origin }) => {
  const formatTitle = `${title} - wuh.site`
  const formatDate = dayjs(update_at).format('YYYY-MM-DD HH:MM:ss')
  const keywordsStr = keywords?.toString() ?? title
  return (<>
    <div className='b__post-header'>
      <Head>
        <title>{formatTitle}</title>
        <meta name='description' content={keywordsStr} />
        <meta name='author' content='shadow, wuh131420@foxmail.com' />
        <meta keywords={keywordsStr} />
        <meta name='renderer' content='webkit' />
        <meta httpEquiv="cache-control" content="no-cache"></meta>
      </Head>

      <h1 className='b__post-header--title'>{title}</h1>
      <p className='b__post-header--head'>
        <time>{formatDate}</time>&nbsp;&nbsp;
        <span>发布于 {origin}</span>
      </p>
    </div>
    <style jsx>{`
      .b__post-header {
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
      }
      .b__post-header--title {
        margin: 0;
        font-size: 28px;
      }
      .b__post-header--head {
        margin: 0;
        font-size: 14px;
        color: #888484;
      }
    `}</style>
  </>)
}

export default PostTitle