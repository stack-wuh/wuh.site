import { useRef, useEffect, useState } from 'react'

const DEFAULT_OPTIONS = {
  restoreOnMount: true,
  hiddenTitle: '(灬ꈍ ꈍ灬) 别走, 我在努力了',
  prefix: ' - wuh.site',
  suffix: '吴尒红 - ',
  allowPrefix: true,
  allowSuffix: true,
  allowCustom: true,
  customTitle: '你一定也想起舞吧'
}

export { DEFAULT_OPTIONS }

const getVisible = () => {
  if (typeof document === 'undefined') return;

  return document.visibilityState
}

const useTitle = (options = DEFAULT_OPTIONS) => {
  const [visible, setvisible] = useState(() => getVisible())
  const raf = useRef(document.title)
  
  useEffect(() => {
    if (visible === 'hidden') {
      document.title =  `${options.allowSuffix && options.suffix}${options.hiddenTitle}${options.allowPrefix && options.prefix}`
    }

    if (visible === 'visible') {
      document.title = options.allowCustom ? (options.customTitle ?? DEFAULT_OPTIONS.customTitle) + options.prefix : raf.current
    }
  }, [visible])

  useEffect(() => {
    window.addEventListener('visibilitychange', () => setvisible(getVisible()))
    return () => {
      window.removeEventListener('visibilitychange', () => setvisible(getVisible()))
    }
  }, [])
}

export default typeof document !== 'undefined' ? useTitle : () => {}