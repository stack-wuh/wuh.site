import Head from 'next/head'
import withLayout from '@/layout/withLayout'
import LocationMap from '@/components/amap'
import Divider from '@/components/divider'
import Empty from '@/components/empty'
import Button from '@/components/button/button'
import useTitle, { DEFAULT_OPTIONS as defaultOptions } from '@/hooks/useTitle'
import Space from '@/components/space'

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
            <i className='iconfont-color iconbiji' />
            <span className="text-wave">飘渺的风怎么追逐自由的雨, 就像此时的我在想彼时的你。</span>
          </li>
          <li>
            <i className='iconfont-color iconbiaoqianA01_biji-94' />
            <span>他是一个男孩, 仍然活在理想的世界里, 因为现实世界里的月光太惨白。</span>
          </li>
          <li>
            <i className="iconfont-color iconmusic-on-white-copy" />
            <span>周杰伦,&nbsp; 李宗盛,&nbsp; 纯音乐,&nbsp; <a className='text-link' href="https://music.163.com/#/playlist?id=565717308" target='_blank' rel='external' alt='网易云'>网抑云</a></span>
          </li>
          <li>
            <i className='iconfont-color iconshuji' />
            <span>
              <a className='text-link margin-right-4 text-none' rel='external' href="https://weread.qq.com/misc/booklist/74791710_7kPtxUxu0?code=021d5oFa1GAFQA0MHTIa1F8ayy1d5oF1&state=ok_userinfo" target="_blank" alt='阅读'>阅读</a>,&nbsp;
              <a className='text-link margin-right-4 text-none' rel='external' href='https://www.douban.com/people/wuh-site/notes' target='_blank' alt='读书笔记'>日记</a>,&nbsp;
              <a className='text-link margin-right-4 text-none' rel='external' href='https://www.douban.com/people/wuh-site/subject_doulists/book' target='_blank' alt='豆瓣-书单'>豆瓣-书单</a>,&nbsp;
              <a className='text-link margin-right-4 text-none' rel='external' href='https://www.douban.com/people/wuh-site/subject_doulists/movie' target='_blank' alt='豆瓣-片单'>豆瓣-片单</a>,&nbsp;
              <span>小说</span>,&nbsp;
              <span>推理</span>,&nbsp;
              <span>人间词话</span>&nbsp;
            </span>
          </li>
          <li className='flex-align-center'>
            <i className="iconfont-color iconxinhao" />
            <Space size='10px' style={{ padding: 0, alignItems: 'center' }}>
              <a href="https://www.github.com/stack-wuh" rel='external' target="_blank" className='icon-outer icon-outer-github'>
                <i className='iconfont icon-github' />
                <span>Github</span>
              </a>
              <a href="https://twitter.com/wuh131420" rel='external' target="_blank" className="icon-outer icon-outer-twitter">
                <i className='iconfont icon-twitter' />
                <span>Twitter</span>
              </a>
              <a href="https://www.douban.com/people/wuh-site/" rel="external" target='_blank' className="icon-link iconfont-color icondouban-circle" />
              <a href="https://space.bilibili.com/18414227" rel='external' target="_blank" className="icon-link iconfont-color iconbilibili" />
              <a href="https://weibo.com/wuerhong" rel='external' target="_blank" className="icon-link iconfont-color iconsina-circle" />
              <a href="https://www.linkedin.com/in/shadow-wu" rel='external' target="_blank" className="icon-link iconfont-color iconlinkedin-circle" />
              <a href="https://www.zhihu.com/people/wuhong.site" rel='external' target="_blank" className="icon-link iconfont-color iconzhihu-circle" />
            </Space>
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
        font-size: 16px;
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

      .icon-outer {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        border-radius: 3px;
        color: #fff;
        font-size: 13px;
        text-decoration: none;
      }
      .icon-outer i {
        font-size: 14px;
      }
      .icon-outer-github {
        background: linear-gradient(45deg, #8e8787, #24282d);
      }
      .icon-outer-twitter {
        background: linear-gradient(45deg, #78bae2, #1b95e0)
      }
      .icon-outer:hover {
        cursor: pointer;
      }
      .icon-link {
        font-size: 24px !important;
        text-decoration: none;
      }

      .flex-align-center {
        align-items: center;
      }

      .text-wave {
        text-decoration: underline wavy var(--color-4);
        transition: var(--transition-base);
      }
      .text-wave:hover {
        text-decoration: underline dotted var(--color-5);
        transition: var(--transition-base);
      }
      .text-link {
        color: inherit;
        transition: var(--transition-base);
      }
      .text-link:hover {
        color: var(--color-5);
        text-decoration: underline double var(--color-5);
        transition: var(--transition-base);
      }
      .text-none {
        text-decoration: none;
      }
    `}
    </style>
  </div>
  </>)
}

About.customName = 'about'

export async function getStaticProps () {
  return {
    props: {}
  }
}

export default withLayout(About)