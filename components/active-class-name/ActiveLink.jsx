import Link from 'next/link'
import { useRouter } from 'next/router'
import React , { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childrenClassName = child.props.className || ''
  
  const className = 
    asPath === props.href || asPath === props.as 
      ? `${childrenClassName} ${activeClassName}`.trim() 
        : childrenClassName

  return (<Link {...props}>
    {
      React.cloneElement(child, {
        className: className || null
      })
    }
  </Link>)
}

export default ActiveLink