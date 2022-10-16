import * as React from 'react'
import { useEventListener, useExternal } from 'ahooks'

const WithDynamic: React.FC<{}> = (props) => {
  const [iconNormalPath, setIconNormalPath] = React.useState('')
  const [iconColorPath, setIconColorPath] = React.useState('')
  /**
   * @NOTE 普通字体图标的链接
   */
  useExternal(iconNormalPath, { type: 'css' })
  /**
   * @NOTE 带色彩的字体图标库
   */
  useExternal(iconColorPath, { type: 'css' })

  useEventListener('load', function () { // eslint-disable-line react-hooks/rules-of-hooks
    setIconNormalPath('//at.alicdn.com/t/font_1587964_ap06iu717e5.css')
    setIconColorPath('at.alicdn.com/t/font_2595178_wa25xow6jmp.css')
  })

  return <>{props.children}</>
}

export default WithDynamic