import React from 'react'
import classnames from 'classnames'

import { sizes } from '../space/space'

export type alignItems = 'start' | 'center' | 'end'
export type EmptyTypeProps = {
  size?: sizes,
  align?: alignItems
}

const Empty: React.FC<EmptyTypeProps> = (props) => {
  const { size, align, children } = props

  const innerClassnames = classnames('ww_empty__inner', {
    [`ww_empty__inner--${size}`]: size,
    [`ww_empty__inner--${align}`]: align
  })

  return <div className="ww_empty">
    <div className={innerClassnames}>
      {children}
    </div>
  </div>
}

export default Empty