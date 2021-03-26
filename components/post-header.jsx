import Head from 'next/head'
import dayjs from 'dayjs'

const PostTitle = ({ title, sub_title, update_at, keywords, origin, cover_img, _id }) => {
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wuh131420" />
        <meta name="twitter:creator" content="@wuh131420" />
        <meta name='twitter:image' content={cover_img} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={sub_title} />
        <meta name='twitter:image:alt' content='图片太大了,没办法了' />
        <script  type='application/ld+json' dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://wuh.site/post/${_id}"
            },
            "headline": "${formatTitle}",
            "author": "吴尒红 Shadow",
            "image": [
              "${cover_img}"
            ],
            "dateModified": "${update_at}"
          }`
        }} />
      </Head>

      <h1 className='b__post-header--title'>{title}</h1>
      <p className='b__post-header--head'>
        <time>{formatDate}</time>&nbsp;&nbsp;
        <span>发布于 <strong>{origin}</strong></span>
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
        padding-bottom: 10px;
        font-size: 28px;
        color: var(--color-text-less);
      }
      .b__post-header--head {
        margin: 0;
        font-size: 14px;
        color: #888484;
        color: var(--color-text-less);
      }
    `}</style>
  </>)
}

export default PostTitle