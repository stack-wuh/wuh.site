'use client'
import * as React from 'react'
import classnames from 'classnames'

export interface TagProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  className?: string
  bordered?: boolean
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (props: TagProps, ref) => {
    const classNames = classnames(
      'px-2.5 py-1',
      'bg-indigo-100 text-indigo-500',
      'rounded',
      'hover:bg-indigo-200',
      'transtion-all ease-in duration-300'
    )

    return <span className={classNames}>{props.children}</span>
  }
)

export default Tag
