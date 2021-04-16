import React from 'react'

import jsCookie from './js-cookie'

const CookieProvider = React.createContext({
  key: 'cookie',
})

export { CookieProvider }

const Provider = ({ children, value }) => {
  const cookie = new jsCookie()
  const mergeValue = { cookie, ...value }

  return <CookieProvider.Provider value={mergeValue}>{children}</CookieProvider.Provider>
}

Provider.defaultProps = {
  value: {}
}
export default Provider