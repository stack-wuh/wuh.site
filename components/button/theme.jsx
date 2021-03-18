import { useEffect } from 'react'
import Affix from '@/components/affix'
import Space from '@/components/space'

const Theme = () => {
  const toggle = () => {
    const container = document.querySelector('html');
    const themeMode = container.getAttribute('data-theme-mode');
    const targetMode = themeMode === 'light' ? 'dark' : 'light'
    document.cookie = `theme-mode=${targetMode}; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/;`
    container.setAttribute('data-theme-mode', targetMode)
  }

  useEffect(() => {
    const elem = document.createElement('style')
    const container  = document.querySelector('head')
    elem.className = 'asd'

    container.appendChild(elem)
  }, [])

  return (<div className="theme">
    <Affix top="10vh" right={10}>
      <Space direction="column">
        <span onClick={toggle}>dark</span>
        <span>light</span>
      </Space>
    </Affix>

    <style jsx>{`

    `}</style>
  </div>)
}

export default Theme