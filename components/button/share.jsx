import Space from '@/components/space'
import Affix from '@/components/affix'

const shareMaps = [
  {
    label: '知乎',
    icon: 'iconfont icon-zhihu',
    href: 'https://www.zhihu.com/people/mei-you-chuan-de-hai-zei-wang',
    name: 'zhihu'
  },
  {
    label: 'QQ',
    icon: 'iconfont icon-qq',
    href: 'https://shadow-web.oss-cn-beijing.aliyuncs.com/web/qq.jpg',
    name: 'qq'
  },
  {
    name: 'wechat',
    icon: 'iconfont icon-wechat',
    href: 'https://shadow-web.oss-cn-beijing.aliyuncs.com/web/wechat.jpeg',
    name: 'wechat'
  },
  {
    name: 'github',
    icon: 'iconfont icon-github',
    href: 'https://github.com/stack-wuh',
    name: 'github'
  },
  {
    name: 'twitter',
    icon: 'iconfont icon-ttww',
    href: 'https://twitter.com/wuh131420',
    name: 'twitter'
  },
  {
    name: 'link',
    icon: 'iconfont icon-link',
    name: 'link'
  },
]

const Share = () => {
  const childs = shareMaps.map(share => {
    return (<span key={share.name}>
      <a href={share.href} data-theme-name={share.name} className={`${share.icon} share-item`} target="_blank" />
    </span>)
  })

  return <div className="share">
    <Affix left={0} top={100}>
      <Space direction="column" size={0} style={{ padding: 0 }}>
        {childs}
      </Space>
    </Affix>
    <style jsx global>{`
      .share {
        color: #555;
        font-size: 18px;
        opacity: 0.7;
        transition: opacity .5s ease;
      }
      .share:hover {
        opacity: 1;
      }
      a.share-item {
        position: relative;
        display: inline-block;
        height: 32px;
        font-size: 25px;
        line-height: 32px;
        color: inherit;
        text-decoration: none;
        transition: all .5s ease;
      }
      a.share-item:hover {
        cursor: pointer;
        padding-left: .5em;
        padding-right: .3em;
        color: #fff;
      }

      a[data-theme-name='zhihu']:hover {
        background-color: #0d87ea;
      }
      a[data-theme-name='qq']:hover {
        background-color: #30a5dd;
      }
      a[data-theme-name='wechat']:hover {
        background-color: #69bb63;
      }
      a[data-theme-name='twitter']:hover {
        background-color: #5ed7fc
      }
      a[data-theme-name='github']:hover {
        background-color: #181616
      }
      a[data-theme-name='link']:hover {
        background-color: #181616
      }
    `}</style>
  </div>
}

export default Share