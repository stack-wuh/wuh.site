import { BreadcrumbJsonLd, ArticleJsonLd } from 'next-seo'
import Space from "@/components/space/space"
import Tag from "@/components/tag"
import { useRouter } from 'next/router'
import { usePostContext } from "."

const Header = () => {
  const data = usePostContext()
  const { title, origin, update_at, cover_img, sub_title } = data
  const router = useRouter()

  return <div className="ww_post ww_post__header">
    {/* google 结构化优化 */}
    <ArticleJsonLd
      url={'https://wuh.site' + router.asPath}
      title={title}
      authorName='吴尒红@shadow'
      publisherName='吴尒红'
      publisherLogo='https://src.wuh.site/common/avatar.jpg'
      description={sub_title}
      datePublished={update_at}
      images={[cover_img]} />
    {/* google 结构化 面包屑 */}
    <BreadcrumbJsonLd itemListElements={[{ position: 1, name: '首页 | Home', item: 'https://wuh.site' }, { position: 2, name: '文章 | Article', item: 'https://wuh.site' + router.asPath }]} />
    <h2 className='ww_post__header--title'>{title}</h2>
    <p className='ww_post__header--head'>
      <Space style={{ paddingLeft: 0 }} ghost>
        <time>{update_at}</time>
        <span>发布于</span>
        <Tag icon='icon-yuque-fill1' color="yuque">{origin}</Tag>
      </Space>
    </p>
  </div>
}

export default Header