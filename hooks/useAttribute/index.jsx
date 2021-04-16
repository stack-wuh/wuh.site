import { useCallback } from 'react'

const useAttribute = () => {
  const target = document.querySelector('html')

  const set = useCallback(
    (attrName, attrValue) => {
      target.setAttribute(attrName, attrValue)
    },
    [],
  )

  return { set }
}

export default typeof document !== 'undefined' ? useAttribute : () => {}