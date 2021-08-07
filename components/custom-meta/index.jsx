import { useEffect, useState } from 'react'
import Head from 'next/head'
import config from '../../global.config.json'

const { prefix, suffix } = config.pages_title

const getVisible = () => {
  if (typeof document === 'undefined') return;

  return document.visibilityState
}

const CustomMeta = ({
  children,
  title,
  hiddenTitle,
  customName,
  customTitle
}) => {
  const [visible, setvisible] = useState(() => getVisible())

  useEffect(() => {
    let newTitle = title
    newTitle = visible === 'visible' ? title : hiddenTitle

    if (!customTitle) {
      document.title = config.pages_title.suffix + newTitle + config.pages_title.prefix
    }
  }, [visible, customName])

  useEffect(() => {
    window.addEventListener('visibilitychange', () => setvisible(getVisible()))
  
    return () => {
      window.addEventListener('visibilitychange', () => setvisible(getVisible()))
    }
  }, [])
  return (<>
    <Head>
      <title>{suffix}{title}{prefix}</title>
    </Head>
    {children}
  </>)
}

export default CustomMeta