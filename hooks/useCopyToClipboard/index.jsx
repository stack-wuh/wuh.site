import { useState, useCallback, useEffect } from 'react'

const useCopyToClipboard = (value) => {
  const [isCopied, setisCopied] = useState(false)

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', true)
    el.style = 'position: absolute; left: -999999px; z-index: -9999;'
    document.body.appendChild(el)
    el.select()
    const success = document.execCommand('copy')
    document.body.removeChild(el)

    return success
  }

  const copy = useCallback(
    () => {
      if (!isCopied) {
        setisCopied(copyToClipboard(value))
      }
    },
    [value],
  )

  useEffect(() => {
    setisCopied(false)
  }, [value])
  
  return [isCopied, copy]
}

export default useCopyToClipboard 