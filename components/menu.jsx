import ActiveNav from '@/components/active-class-name/ActiveLink'
import styles from '@/styles/layout.module.css'

const Menu = () => {
  return (<nav itemScope itemType="https://schema.org/BreadcrumbList" className={styles.menu} role='menubar'>
    <ActiveNav itemProp="itemListElement" itemScope="https://schema.org/ListItem" href="/" activeClassName="is-active">
      <a itemProp="item" className='menu-item' href="https://wuh.site" role='menuitem' tabIndex="0">
        <i className='iconfont icon-code' />
        <span itemProp="name">集合</span>
        <meta itemProp="position" content="1" />
      </a>
    </ActiveNav>
    <ActiveNav itemProp="itemListElement" itemScope="https://schema.org/ListItem" href="/about" activeClassName="is-active">
      <a itemProp="item" className='menu-item' href="https://wuh.site/about" role='menuitem' tabIndex='0'>
        <i className='iconfont icon-bussiness-man' />
        <span itemProp="name">关于</span>
        <meta itemProp="position" content="2" />
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
        background-color: var(--color-background-nav);
      }

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #333;
        border: none;
        outline: none;
      }

      a i {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-right: .5em;
        color: inherit;
        font-size: 20px;
      }

      a.menu-item {
        height: 46px;
        padding: 0 12px;
        border-bottom: 6px solid var(--color-border-pain);
        background-color: var(--color-background-item);
        text-align: left;
        line-height: 40px;
        border-radius: 3px;
        transition: all .3s ease-in;
        font-size: 15px;
        letter-spacing: 2px;
        box-sizing: border-box;
      }

      a.menu-item:hover {
        background-color: var(--color-background-active-nav);
        cursor: pointer;
        border-radius: 4px;
        transition: all .3s ease-out;
      }

      .is-active {
        background-color: var(--color-background-active-nav) !important;
        border-radius: 4px !important;
        transition: all .3s ease;
      }

    `}</style>
  </nav>)
}

export default Menu