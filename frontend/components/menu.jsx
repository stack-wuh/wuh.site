import Link from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'

const Menu = () => {
  const router = useRouter()
  const itemClass = url => classnames({
    'is-active': router.pathname === url
  }, 'menu-item')

  return (<nav className='menu'>
    <ul className='menu-list'>
      <li className={itemClass('/')}>
        <Link href="/">
          <a>
            <i className='iconfont icon-code' />
            <span>前端</span>
          </a>
        </Link>
      </li>
      <li className={itemClass('/about')}>
        <Link href='/about'>
          <a>
            <i className='iconfont icon-bussiness-man' />
            <span>关于</span>
          </a>
        </Link>
      </li>
    </ul>
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

      ul.menu-list {
        padding: 0;
        list-style: none;
      }

      li.menu-item {
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

      .menu-item:hover {
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