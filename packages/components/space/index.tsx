'use client'
import * as React from 'react'
import classnames from 'classnames'

type Size = 'small' | 'middle' | 'large' | undefined

enum SizeMap {
  small = 4,
  middle = 8,
  large = 16
}


export interface SpaceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: Size
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props) => {
  const gapSize = SizeMap[props.size || 'small']

  const classNames = classnames(`flex gap-${gapSize}`)

  return <div className={classNames}>
    {props.children}
  </div>
})

export default Space