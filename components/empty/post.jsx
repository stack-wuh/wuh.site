import Link from 'next/link'
import Empty from './normal'
import Space from '@/components/space'

/**
 * 附加一些推送的快捷入口
 */
const DEFAULT_LINKS = [
  {
    title: '2021年度总结',
    href: '/post/2021-04/2021年度总结'
  },
  {
    title: '从PM2到docker, 离不开的Nginx',
    href: '/post/2021-04/从PM2到docker, 离不开的Nginx'
  },
  {
    title: '业务中条件渲染的另一种玩法',
    href: '/post/2021-04/业务中条件渲染的另一种玩法'
  },
]

const childs = DEFAULT_LINKS.map(link => (<Link href={link.href} key={link.href}>
  <>
    <a href={`https://wuh.site${link.href}`} className="margin-right-10" role="listitem" tabIndex="0" aria-hidden rel="next alertnate">{link.title}</a>
    <style jsx>{`
      .margin-right-10 {
        margin-right: 10px;
      }
    `}</style>
  </>
</Link>))

const Post = () => {
  return (<Empty goast>
    <div className="empty-post">
      <i className="iconfont icon-hangkonghangtian-weixingsatellite ep--m-icon" />
      <div>
        <p>o(╥﹏╥)o 非常遗憾, 这里没有你要找的信息</p>
        <p>我会继续努力完善相关内容 ヾ(=･ω･=)o</p>
      </div>
    </div>
    <div className="empty-extend">
      <span>更多推荐: </span>
      <Space>
        {childs}
      </Space>
    </div>
    <style jsx>{`
      .empty-post {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-size: 15px;
      }
      .ep--m-icon {
        margin-right: 1em;
        font-size: 64px;
      }

      .empty-extend {
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    `}</style>
  </Empty>)
}

export default Post