import { useState } from 'react'
import Affix from '@/components/affix'
import Space from '@/components/space'
import { getCookie } from '@/lib/utils'

const TIME_STRING = new Date('2050-01-01 12:00:00')
const Theme = () => {
  const [mode, setmode] = useState(getCookie('theme-mode', 'light'));
  const [lang, setlang] = useState(getCookie('language', 'ZH'))

  const toggleTheme = (mode) => {
    const themeMode = getCookie('theme-mode');
    const container = document.querySelector('html');

    if (themeMode === mode) return
    
    setmode(mode)
    document.cookie = `theme-mode=${mode}; expires=${TIME_STRING}; path=/;`
    container.setAttribute('data-theme-mode', mode)
  }

  const toggleLang = (val) => {

    document.cookie = `language=${val}; expires=${TIME_STRING}; path=/;`
    setlang(val)
  }

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