import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export const MiddleScreen = ({ children }) => {
  const isMiddleScreen = useMediaQuery({ minWidth: 767 })
  return isMiddleScreen ? children : null
}

export const Default = ({ children }) => {
  return children
}

export default {
  Desktop,
  Tablet,
  MiddleScreen,
  Mobile,
  Default
}