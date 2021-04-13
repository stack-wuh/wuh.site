import { useEffect } from 'react'

const useUnMount = (fn) => {
  useEffect(() => {
    return () => {
      fn?.()
    }
  }, [])
}

export default useUnMount