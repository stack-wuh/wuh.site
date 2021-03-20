import { useState, useEffect } from 'react'
import Affix from '@/components/affix'
import Space from '@/components/space'

const Theme = () => {
  const [mode, setmode] = useState('light');
  const [lang, setlang] = useState('ZH')

  const toggleTheme = (mode) => {
    const container = document.querySelector('html');
    
    setmode(mode)
    localStorage.setItem('data-theme-mode', mode)
    container.setAttribute('data-theme-mode', mode)
  }

  const toggleLang = (val) => {
    localStorage.setItem('language', val)
    setlang(val)
  }

  useEffect(() => {
    const local_theme_mode = localStorage.getItem('data-theme-mode')
    toggleTheme(local_theme_mode)
  }, [])

  return (<div className="theme">
    <Affix top="10vh" right={0}>
      <Space direction="column" size={0}>
        <div className='switch'>
          {
            mode === 'light' 
              ? (<span className='btn-switch switch-dark iconfont icon-Moon' onClick={() => toggleTheme('dark')}></span>)
                : (<span className='btn-switch switch-light iconfont icon-Sun' onClick={() => toggleTheme('light')}></span>)
          }
        </div>
        <div className='switch'>
          {
            lang === 'ZH' 
              ? (<span onClick={() => toggleLang('EN')} className='btn-switch switch-zh'>ZH</span>) 
                : (<span onClick={() => toggleLang('ZH')} className='btn-switch switch-en'>EN</span>)
          }
        </div>
      </Space>
    </Affix>

    <style jsx>{`
      .switch {
        width: 30px;
        height: 30px;
        border-bottom: 2px solid transparent;
        text-align: center;
        line-height: 30px;
      }
      .btn-switch {
        display: inline-block;
        width: 100%;
        height:100%;
        user-select: none;
        color: var(--color-text-primary);
        border-left: 2px solid transparent;
      }
      .btn-switch:hover {
        cursor: pointer;
      }
      .switch-dark {
        border-left-color: red;
      }
      .switch-light {
        border-left-color: blue;
      }
      .switch-zh {
        border-left-color: red;
      }
      .switch-en {
        border-left-color: blue;
      }
    `}</style>
  </div>)
}

export default Theme