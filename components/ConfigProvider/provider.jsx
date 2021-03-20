import React from 'react'

const ConfigProviderRef = React.createContext({
  key: '@@'
})

export { ConfigProviderRef }

const ConfigProvider = ({ children, value = {} }) => {
  return (<>
    <ConfigProviderRef.Provider value={value}>{children}</ConfigProviderRef.Provider>
  </>)
}

export default ConfigProvider