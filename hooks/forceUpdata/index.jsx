import { useReducer, useCallback } from 'react'

const useForceUpdate = () => {
  const [, dispatch] = useReducer(x => x + 1, 0)

  const update = useCallback(
    dispatch,
    [],
  )

  return update
}

export default useForceUpdate