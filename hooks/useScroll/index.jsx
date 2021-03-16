import { useRef, useEffect, useMemo, useLayoutEffect } from 'react'

const DURATION_TIME = 500
const DURATION_STEP = 7
const useScroll = ({
  getContainer,
  duration = DURATION_TIME,
  step = DURATION_STEP
}) => {
  const containerRef = useRef()
  const raf = useRef({ id: null })

  useLayoutEffect(() => {
    containerRef.current = getContainer()
  })

  const handler = (number = window.pageYOffset) => {
    const offsetHeight = containerRef.current.offsetHeight
    let scroll = number + (offsetHeight/24-24)

    window.scrollTo(0, scroll)
    if (scroll <= offsetHeight) {
      raf.current.id = window.requestAnimationFrame(() => handler(scroll))
    } else {
      window.cancelAnimationFrame(raf.current.id)
    }
  }

  const scrollTo = () => {
    raf.current.id = window.requestAnimationFrame(() => handler())
  }

  const scrollTopHandler = (scrollTop = window.pageYOffset) => {
    let scroll = scrollTop - (scrollTop/7 + 7)
    window.scrollTo(0, scroll)

    if (scroll > 0) {
      raf.current.id = window.requestAnimationFrame(() => scrollTopHandler(scroll))
    } else {
      window.cancelAnimationFrame(raf.current.id)
    }
  }

  const scrollTop = () => {
    raf.current.id = window.requestAnimationFrame(() => scrollTopHandler())
  }

  return {
    scrollTo,
    scrollTop
  }
}

export default useScroll