import { useState, useEffect, useRef } from 'react'
import Affix from '@/components/affix'
import { useCookie } from '@/components/CookieProvider'
import { withConfig } from '@/components/ConfigProvider'
import useAttribute from '@/hooks/useAttribute'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const prefix = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/`

const Theme = ({
  default_theme_mode,
  default_language
}) => {
  const hljsThemeRef = useRef()
  const cookie = useCookie()
  const attribute = useAttribute()
  const [mode, setmode] = useState('light');
  const [lang, setlang] = useState('ZH');

  const toggleTheme = (mode) => {
    setmode(mode)
    attribute.set('data-theme-mode', mode)
    cookie.setItem('data-theme-mode', mode, new Date('9999-12-31 23:59:59').toString(), '/')
    if (hljsThemeRef.current) {
      hljsThemeRef.current.href = prefix + `${mode === 'light' ? 'github' : 'github-dark'}.min.css`
    }
  }

  const toggleLang = (val) => {
    cookie.setItem('language', val, new Date('9999-12-31 23:59:59').toString(), '/')
    setlang(val)
  }

  useEffect(() => {
    const local_theme_mode = cookie.getItem('data-theme-mode') ?? default_theme_mode
    const local_language = cookie.getItem('language') ?? default_language
    toggleTheme(local_theme_mode)
    toggleLang(local_language)

    hljsThemeRef.current = document.querySelector('link[name="hljs"]')
  }, [])

  return (<div className="theme">
    <Affix top="10vh" right={0}>
      <div className="switch">
        <SwitchTransition mode="out-in">
          <CSSTransition classNames="fade" key={mode} addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}>
            {
              mode === 'light' 
                ? (<span role='region' tabIndex='1' className='btn-switch switch-dark iconfont icon-Moon is-focus' onClick={() => toggleTheme('dark')}></span>)
                  : (<span role='region' tabIndex='1' className='btn-switch switch-light iconfont icon-Sun is-focus' onClick={() => toggleTheme('light')}></span>)
            }
          </CSSTransition>
        </SwitchTransition>
      </div>

      <div className="switch">
        <SwitchTransition mode="out-in">
          <CSSTransition classNames="fade" key={lang} addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}>
            {
              lang === 'ZH' 
                ? (<span role='region' tabIndex='1' onClick={() => toggleLang('EN')} className='btn-switch switch-zh is-focus'>ZH</span>) 
                  : (<span role='region' tabIndex='1' onClick={() => toggleLang('ZH')} className='btn-switch switch-en is-focus'>EN</span>)
            }
          </CSSTransition>
        </SwitchTransition>
      </div>
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

      .fade-enter {
        opacity: 0;
        transform: translateX(-50%);
      }
      .fade-enter-active {
        opacity: 1;
        transform: translateX(0);
      }

      .fade-exit {
        opacity: 1;
        transform: translateX(0);
      }
      .fade-exit-active {
        opacity: 0;
        transform: tranxlateX(-100%);
      }

      .fade-enter-active, 
      .fade-exit-active {
        transition: all .3s;
      }

    `}</style>
  </div>)
}

export default withConfig(Theme)