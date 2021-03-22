import React, { useEffect, useRef, useState } from 'react'
import config from '../public/config.json'

const { popup_titles } = config

const MAX_POPUP_STACK_LENGTH = 20
const Popup = () => {
  const [popups, setpopups] = useState([])
  const currentRef = useRef({ index: 0 })
  const popupRef = useRef()

  const getMousePos = (event) => {
    const pos = {
      x: event.clientX,
      y: event.clientY
    }

    return pos
  }

  const randomRgbColor = () => {
    let [r, g, b] = [
        Math.random() * 255,
        Math.random() * 255,
        Math.random() * 255,
        Math.random() * 1
    ]
    return `rgba(${r}, ${g}, ${b}, ${1})`
}

  const getTitle = () => {
    const { index } = currentRef.current
    currentRef.current.index += 1
    
    if (index >= 12) {
      currentRef.current.index = 0
    }

    return popup_titles[index]
  }

  const createElem = (e) => {
    const mousePos = getMousePos(e)
    const title = getTitle()

    const el = React.createElement('span', {
      className: 'popup-item revert-in',
      style: {
        position: 'fixed',
        left: mousePos.x,
        top: mousePos.y - 30,
        backgroundColor: randomRgbColor(),
        color: randomRgbColor()
      },
      key: Math.random()
    }, title)

    setpopups(state => state.concat(el))
  }

  useEffect(() => {
    if (!popups.length) return
    if (popups.length >= MAX_POPUP_STACK_LENGTH) {
      setTimeout(() => {
        setpopups([])
      }, 600)
    }
  }, [popups])

  useEffect(() => {
    window.addEventListener('click', createElem, false)

    return () => window.removeEventListener('click', createElem, false)
  }, [])

  return (<div id="popup" className='popup' ref={popupRef}>
    {popups}
    <style jsx global>{`
      .popup-item {
        position: fixed;
        display: inline-block;
        width: 80px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 3px;
        background-color: #ff22aa;
      }
    `}</style>
  </div>)
}

export default Popup