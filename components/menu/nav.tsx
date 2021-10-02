import ActiveLink from './link'

export default function Nav() {
  return <nav id='nav' role='menubar' className="ww_menu">
    <ActiveLink href="/" activeClassName="is-active">
      <span className='ww_menu-item' role='menuitem' tabIndex={0}>
        <i className='iconfont icon-code' />
        <span >集合</span>
      </span>
    </ActiveLink>
    <ActiveLink href="/about" activeClassName="is-active">
      <span className='ww_menu-item' role='menuitem' tabIndex={0}>
        <i className='iconfont icon-bussiness-man' />
        <span >关于</span>
      </span>
    </ActiveLink>
    <ActiveLink href="https://github.com/stack-wuh/react-router-config/tree/v2" activeClassName="is-active">
      <span className='ww_menu-item is-link' role='menuitem' tabIndex={0}>
        <i className='iconfont icon-github' />
        <span>源代码</span>
      </span>
    </ActiveLink>
    <ActiveLink href="https://docs.wuh.site" activeClassName="is-active">
      <span className='ww_menu-item' role='menuitem' tabIndex={0}>
        <i className='iconfont icon-insertlink' />
        <span>文档指南</span>
      </span>
    </ActiveLink>
  </nav>
}