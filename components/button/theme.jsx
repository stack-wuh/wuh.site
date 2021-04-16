import { useState, useEffect } from 'react'
import Affix from '@/components/affix'
import Space from '@/components/space'
import { useCookie } from '@/components/CookieProvider'
import useAttribute from '@/hooks/useAttribute'

const Theme = () => {
  const cookie = useCookie()
  const attribute = useAttribute()
  const [mode, setmode] = useState('light');
  const [lang, setlang] = useState('ZH');

  const toggleTheme = (mode) => {
    setmode(mode)
    attribute.set('data-theme-mode', mode)
    cookie.setItem('data-theme-mode', mode)
  }

  const toggleLang = (val) => {
    cookie.setItem('language', val)
    setlang(val)
  }

  useEffect(() => {
    const local_theme_mode = cookie.getItem('data-theme-mode')
    const local_language = cookie.getItem('language')
    toggleTheme(local_theme_mode)
    toggleLang(local_language)
  }, [])

  return (<div className="theme">
    <Affix top="10vh" right={0}>
      <Space direction="column" size={0}>
        <div className='switch'>
          {
            mode === 'light' 
              ? (<span role='region' tabIndex='1' className='btn-switch switch-dark iconfont icon-Moon is-focus' onClick={() => toggleTheme('dark')}></span>)
                : (<span role='region' tabIndex='1' className='btn-switch switch-light iconfont icon-Sun is-focus' onClick={() => toggleTheme('light')}></span>)
          }
        </div>
        <div className='switch'>
          {
            lang === 'ZH' 
              ? (<span role='region' tabIndex='1' onClick={() => toggleLang('EN')} className='btn-switch switch-zh is-focus'>ZH</span>) 
                : (<span role='region' tabIndex='1' onClick={() => toggleLang('ZH')} className='btn-switch switch-en is-focus'>EN</span>)
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
        background-color: line
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