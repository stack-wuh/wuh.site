import React from 'react'
import { CookieProvider } from './provider'

const useCookie = () => {
  const context = React.useContext(CookieProvider)

  return context.cookie
}

export default typeof document !== 'undefined' ? useCookie : () => {}