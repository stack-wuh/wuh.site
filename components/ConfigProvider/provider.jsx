import React from 'react'
import { useResponsive } from 'ahooks'

const ConfigProviderRef = React.createContext({
  key: '@@'
})

export { ConfigProviderRef }

const ConfigProvider = ({ children, value = {} }) => {
  const responsive = useResponsive() || {}
  const config = {
    responsive
  }
  Object.assign(config, value)

  return (<>
    <ConfigProviderRef.Provider value={config}>{children}</ConfigProviderRef.Provider>
  </>)
}

export default ConfigProvider