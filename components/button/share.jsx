import Space from '@/components/space'
import Affix from '@/components/affix'

const shareMaps = [
  {
    label: '知乎',
    icon: 'iconfont icon-zhihu',
    href: 'https://www.zhihu.com/people/wuhong.site',
    name: 'zhihu',
    title: '去知乎',
    tabIndex: 1
  },
  {
    label: 'QQ',
    icon: 'iconfont icon-qq',
    href: 'https://src.wuh.site/web/qq.jpg',
    name: 'qq',
    title: 'Share to: QQ',
    tabIndex: 1
  },
  {
    name: 'wechat',
    icon: 'iconfont icon-wechat',
    href: 'https://src.wuh.site/web/wechat.jpeg',
    name: 'wechat',
    title: 'Share to: 微信',
    tabIndex: 1
  },
  {
    name: 'github',
    icon: 'iconfont icon-github',
    href: 'https://github.com/stack-wuh',
    name: 'github',
    title: '去Github',
    tabIndex: 1
  },
  {
    name: 'twitter',
    icon: 'iconfont icon-ttww',
    href: 'https://twitter.com/wuh131420',
    name: 'twitter',
    title: "去twitter",
    tabIndex: 1
  },
  {
    name: 'yuque',
    icon: 'iconfont icon-yuque',
    href: 'https://www.yuque.com/shadow.wu',
    name: 'yuque',
    title: '去语雀',
    tabIndex: 1
  },
  {
    name: 'link',
    icon: 'iconfont icon-link',
    name: 'link',
    title: '别点我',
    tabIndex: 1
  },
]

const Share = () => {
  const childs = shareMaps.map(share => {
    return (<span key={share.name}>
      <a 
        role="button" 
        tabIndex={share.tabIndex} 
        href={share.href} 
        data-theme-name={share.name} 
        className={`${share.icon} share-item is-focus`} 
        target="_blank"
        title={share.title}
        rel="external next" />
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
      a[data-theme-name='yuque']:hover {
        background-color: #31cc79;
      }
      a[data-theme-name='link']:hover {
        background-color: #181616
      }
      .is-focus:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 2px 1px var(--primary-color);
        border-radius:3px;
      }
    `}</style>
  </div>
}

export default Share