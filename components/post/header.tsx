import Space from "@/components/space/space"
import { usePostContext } from "."

const Header = () => {
  const data = usePostContext()
  const { title, origin, update_at } = data

  return <div className="ww_post ww_post__header">
    <h2 className='ww_post__header--title'>{title}</h2>
    <p className='ww_post__header--head'>
      <Space style={{ paddingLeft: 0 }}>
        <time>{update_at}</time>
        <span>发布于</span>
        <span>{origin}</span>
      </Space>
    </p>
  </div>
}

export default Header