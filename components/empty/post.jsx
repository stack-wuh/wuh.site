import Link from 'next/link'
import Empty from './normal'
import Space from '@/components/space'

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
        <Link href={`/post/2021-04/2021年度总结`}>
          <a className='margin-right-10' role="listitem" tabIndex="0" aria-hidden rel='next alertnate' href="https://wuh.site/post/2021-04/2021年度总结" alt='2021年度总结'>2021年度总结</a>
        </Link>
        <Link href={`/post/2021-04/从PM2到docker, 离不开的Nginx`}>
          <a role="listitem" tabIndex="0" aria-hidden rel='next alertnate' href="https://wuh.site/post/2021-04/从PM2到docker, 离不开的Nginx" alt="从PM2到Docker, 离不开的Nginx">从PM2到Docker, 离不开的Nginx</a>
        </Link>
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

      .margin-right-10 {
        margin-right: 10px;
      }
    `}</style>
  </Empty>)
}

export default Post