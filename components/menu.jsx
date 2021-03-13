import ActiveNav from '@/components/active-class-name/ActiveLink'

const Menu = () => {
  return (<nav className='menu'>
    <ActiveNav href="/" activeClassName="is-active">
      <a className='menu-item'>
        <i className='iconfont icon-code' />
        <span>前端</span>
      </a>
    </ActiveNav>
    <ActiveNav href="/about" activeClassName="is-active">
      <a className='menu-item'>
        <i className='iconfont icon-code' />
        <span>关于</span>
      </a>
    </ActiveNav>

    <style jsx global>{`
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
        user-select: none;
      }

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #333;
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
        border-bottom: 6px solid #fff;
        background-color: #f3f3f3;
        text-align: left;
        line-height: 40px;
        border-radius: 3px;
        transition: all .3s ease-in;
        font-size: 15px;
        letter-spacing: 2px;
        box-sizing: border-box;
      }

      a.menu-item:hover {
        background-color: rgb(100 100 100 / 40%);
        cursor: pointer;
        border-radius: 4px;
        transition: all .3s ease-out;
      }

      .is-active {
        background-color: rgb(100 100 100 / 40%) !important;
        border-radius: 4px !important;
        transition: all .3s ease;
      }

    `}</style>
  </nav>)
}

export default Menu