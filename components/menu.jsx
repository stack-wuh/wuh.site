/* eslint-disable @next/next/no-html-link-for-pages */
import ActiveNav from '@/components/active-class-name/ActiveLink'
import styles from '@/styles/layout.module.css'
import { useRouter } from 'next/router'

const Menu = () => {
  const router = useRouter()

  return (<nav id='nav' className={styles.menu} role='menubar'>
    <ActiveNav href="/" activeClassName="is-active">
      <a className='menu-item' href="/" role='menuitem' tabIndex="0">
        <i className='iconfont icon-code' />
        <span >集合</span>
      </a>
    </ActiveNav>
    <ActiveNav prefetch={false} href="/about" activeClassName="is-active">
      <a onMouseEnter={() => {
        router.prefetch('/about')
      }} className='menu-item' href="/about" role='menuitem' tabIndex='0'>
        <i className='iconfont icon-bussiness-man' />
        <span >关于</span>
      </a>
    </ActiveNav>
    <ActiveNav href="https://github.com/stack-wuh/react-router-config/tree/v2" activeClassName="is-active">
      <a className='menu-item is-link' rel="external noreferrer" href="https://github.com/stack-wuh/react-router-config/tree/v2" target="_blank" role='menuitem' tabIndex='0'>
        <i className='iconfont icon-github' />
        <span>源代码</span>
      </a>
    </ActiveNav>
    <ActiveNav href="https://docs.wuh.site" activeClassName="is-active">
      <a className='menu-item' rel="external noreferrer" href="https://docs.wuh.site" target="_blank" role='menuitem' tabIndex='0'>
        <i className='iconfont icon-insertlink' />
        <span>文档指南</span>
      </a>
    </ActiveNav>

    <style jsx>{`
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }

      nav.menu {
        postion: fixed:
        left: 10px;
        top: 80px;
        user-select: none;
      }

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: var(--nav-color-text);
        border: none;
        outline: none;
      }

      a i {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-right: .5em;
        font-size: 18px;
      }

      a.menu-item {
        height: 40px;
        padding: 0 12px;
        margin-bottom: var(--margin-base);
        text-align: left;
        line-height: 40px;
        color: var(--nav-color-text);
        border-radius: var(--border-radius-base);
        transition: var(--transition-base);
        font-size: 15px;
        letter-spacing: 2px;
        box-sizing: border-box;
      }

      a.menu-item:hover {
        background-color: var(--nav-color-background-active);
        cursor: pointer;
        border-radius: 4px;
        transition: all .3s ease-out;
      }

      .is-active {
        background-color: var(--nav-color-background-active) !important;
        border-radius: 4px !important;
        transition: all .3s ease;
      }

      .is-link {
        margin-top: var(--margin-base-2);
      }

    `}</style>
  </nav>)
}

export default Menu