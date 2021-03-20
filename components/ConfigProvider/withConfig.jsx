import React from 'react'
import { ConfigProviderRef } from './provider'

const withConfig = (Component) => {
  return function ConfigProviderCm (props) {
    return (<ConfigProviderRef.Consumer>
      {
        context => <Component {...props} {...context} />
      }
    </ConfigProviderRef.Consumer>)
  }
}

export default withConfig