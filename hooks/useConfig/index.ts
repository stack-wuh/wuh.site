import { createContext, useContext } from 'react'

export interface configInterfaceProps {
  key?: string,
  themeMode: string,
  language: string,
  header: {
    title: string
  },
  footer: {
    prefixTitle: string,
    mainTitle: string,
    suffixTitle: string,
    copyright: string,
    domain: string
  },
  pager: {
    nextText: string,
    disableNextText: string
  },
  popupLabels: string[],
  pagesConfig: {
    prefix: string,
    suffix: string
  },
  external: {
    icons: string[],
    fonts: string[]
  },
  stateLocale: {
    options: {
      expires: Date,
      path: string,
      domain: string,
      secure: boolean,
      sameSite: any
    }
  }
}
const ConfigProvider = createContext<configInterfaceProps | null>(null)

export { ConfigProvider }

export default function WithConfig () {
  const config = useContext(ConfigProvider)
  return config
}