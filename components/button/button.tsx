import React, { HTMLAttributeAnchorTarget } from 'react'
import classnames from 'classnames'

type sizes = 'small' | 'middle' | 'large'

type types = 'default' | 'primary' | 'circly' | 'rect' | 'text' | 'link' | 'ghost'

type targets = '_blank' | '_self'

export type ButtonTypeProps = {
  /** 点击事件 **/
  onClick?: () => void,
  /** 按钮直接改为父级元素的宽度 **/
  block?: boolean,
  /** 按钮大小尺寸 **/
  size?: sizes,
  /** 按钮的类型 */
  type?: types,
  /** 按钮附带的图标 **/
  icon?: string,
  /** 按钮的iconfont 使用带色彩的字体 **/
  iconWithColor?: string,
  /** 按钮是否是危险状态 **/
  danger?: boolean,
  /** 按钮的点击状态 **/
  disabled?: boolean,
  /** button与a标签相同的属性 **/
  htmlHref?: string,
  /** 与a元素的target属性相同 **/
  target?: targets,
  /** title属性与a标签相同 **/
  title?: string,
  /**
   * 为a标签准备的一个类型
   */
  hrefClassName?: string
}

const Button: React.FC<ButtonTypeProps> = (props) => {
  const {
    children,
    onClick,
    block,
    size = 'middle',
    icon,
    iconWithColor = false,
    type = 'default',
    disabled = false,
    htmlHref,
    target = '_blank',
    title,
    hrefClassName
  } = props

  const classNames = classnames('ww_button', {
    'is-block': block,
  })

  const btnClassNames = classnames('ww_button__inner', {
    [`is-${size}`]: size,
    [`is-${type}`]: type,
    [`is-disabled`]: disabled,
    [`${hrefClassName}`]: hrefClassName
  })

  const iconClassNames = classnames({
    'iconfont': !iconWithColor,
    'iconfont-color': iconWithColor,
  }, icon)

  const node = (<>
    {
      icon && <i className={iconClassNames}></i>
    }
    {
      children && (<button>{children}</button>)
    }
  </>)

  const hrefHtmlProps = {
    target,
    tabIndex: 1,
    role: 'menuitem',
    title
  }
  const achonrClassnames = classnames('ww_button__link', 'ww_button__inner--link')

  return (<div onClick={onClick} className={classNames}>
    <div className={btnClassNames}>
      {
        htmlHref ? <a className={achonrClassnames} {...hrefHtmlProps} href={htmlHref}>{node}</a> : node
      }
    </div>
  </div>)
}

export default Button