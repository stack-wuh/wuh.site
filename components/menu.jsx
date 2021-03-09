const Menu = () => {
  return (<nav className='menu'>
    <ul className='menu-list'>
      <li className='menu-item'>首页</li>
      <li className='menu-item'>关于</li>
    </ul>
    <style jsx global>{`
      nav.menu {
        postion: fixed:
        left: 10px;
      }
      ul.menu-list {
        padding: 0;
        list-style: none;
      }
      li.menu-item {
        height: 40px;
      }
    `}</style>
  </nav>)
}

export default Menu