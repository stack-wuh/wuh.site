import Space from "@/components/space/space"
import Tag from "@/components/tag"
import { usePostContext } from "."

const Header = () => {
  const data = usePostContext()
  const { title, origin, update_at } = data

  return <div className="ww_post ww_post__header">
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