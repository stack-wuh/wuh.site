import * as React from 'react'
import { useEventListener, useExternal } from 'ahooks'

const WithDynamic: React.FC<{}> = (props) => {
  /**
   * @NOTE 普通字体图标的链接
   */
  const iconNormal = useExternal('//at.alicdn.com/t/font_1587964_ap06iu717e5.css', { type: 'css' })
  /**
   * @NOTE 带色彩的字体图标库
   */
  const iconColor = useExternal('//at.alicdn.com/t/font_2595178_wa25xow6jmp.css', { type: 'css' })

  useEventListener('load', function () { // eslint-disable-line react-hooks/rules-of-hooks
    if (iconNormal[0] === 'ready') {
      iconNormal[1]?.load()
    }

    if (iconColor[0] === 'ready') {
      iconColor[1]?.load()
    }
  })

  return <>{props.children}</>
}

export default WithDynamic