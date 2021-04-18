import Head from 'next/head'
import withLayout from '@/layout/withLayout'
import LocationMap from '@/components/amap'
import Divider from '@/components/divider'
import Empty from '@/components/empty'
import useTitle, { DEFAULT_OPTIONS as defaultOptions } from '@/hooks/useTitle'

const About = ({
  routerItemProps
}) => {
  const { title, hiddenTitle } = routerItemProps
  useTitle({ ...defaultOptions, hiddenTitle  })
  return (<>
    <Head>
      <meta keywords="吴尒红, shadow, wuh.site" />
      <title>wuh.site - {title} - wuh.site</title>
      <meta name='description' content='自小多才俊,向来志气高.别人有宝剑,我有笔如刀;' />
      <meta property='og:type' content='webpage' />
      <meta property='og:title' content='技术博客 -- wuh.site' />
      <meta property='og:url' content='https://wuh.site/about' />
      <meta property='og:description' content='前端技术博客, 分享我的知识' />
      <meta property='og:image' content='https://wuh.site/avatar.png' />
      <meta property='og:locale' content='zh-cn' />
    </Head>

    <div className='about'>
      <div className="about-list">
        <ul>
          <li>
            <i className='iconfont icon-email' />
            <span>关山难越，谁悲失路之人。萍水相逢，尽是他乡之人。</span>
          </li>
          <li>
            <i className='iconfont icon-copy' />
            <span>他是一个男孩, 尽管岁数不小了, 还是想继续活在理想的世界里, 因为现实世界里的月光太惨白.</span>
          </li>
          <li>
            <i className="iconfont icon-favorites" />
            <span>周杰伦, 纯音乐, <a href="https://music.163.com/#/playlist?id=565717308" target='_blank'>网抑云</a></span>
          </li>
          <li>
            <i className='iconfont icon-Notvisible' />
            <span><a href="https://weread.qq.com/misc/booklist/74791710_7kPtxUxu0?code=021d5oFa1GAFQA0MHTIa1F8ayy1d5oF1&state=ok_userinfo" target="_blank" alt='阅读'>阅读</a>, 历史, 小说, 推理, 诗词</span>
          </li>
        </ul>
      </div>
    <Divider />
    <div className="about-map">
      <LocationMap />
    </div>
    <Divider />
    <Empty style={{ marginBottom: 16 }} />
    <style jsx>{`
      .about {
        padding: 0 1rem;
        font-size: var(--font-size-base);
        overflow: hidden;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        display: flex;
        padding: 8px 0;
        vertical-align: baseline;
      }
      li i {
        margin-right: 8px;
      }
      .about-list {
        border-radius: 3px;
        padding: .2em;
        box-sizing: border-box;
        background-color: var(--color-gray-2);
        color: var(--color-base-8);
        border: 1px solid var(--color-gray-1);
        transition: all .5s ease;
      }
      a {
        color: inherit;
      }
    `}
    </style>
  </div>
  </>)
}

About.customName = 'about'

export default withLayout(About)