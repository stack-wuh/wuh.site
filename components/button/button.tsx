import { ReactNode } from 'react'
import classnames from 'classnames'

type sizes = 'small' | 'middle' | 'large'

type types = 'default' | 'primary' | 'circly' | 'rect' | 'text' | 'link' | 'ghost'

export type ButtonTypeProps = {
  children: ReactNode,
  onClick: () => void,
  block?: boolean,
  size?: sizes,
  type?: types,
  icon?: string,
  iconWithColor?: string,
  danger?: boolean,
  disabled?: boolean
}

const Button = (props: ButtonTypeProps) => {
  const {
    children,
    onClick,
    block,
    size = 'middle',
    icon,
    iconWithColor = false,
    type = 'default'
  } = props

  const classNames = classnames('ww_button', {
    'is-block': block,
  })

  const btnClassNames = classnames('ww_button__inner', {
    [`is-${size}`]: size,
    [`is-${type}`]: type,
  })

  const iconClassNames = classnames({
    'iconfont': !iconWithColor,
    'iconfont-color': iconWithColor,
  }, icon)

  return (<div onClick={onClick} className={classNames}>
    <div className={btnClassNames}>
      {
        icon && <i className={iconClassNames}></i>
      }
      <button>{children}</button>
    </div>
  </div>)
}

export default Button