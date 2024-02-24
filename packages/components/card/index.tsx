import * as React from 'react'
import classnames from 'classnames'

export interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}


const Card: React.FC<IProps> = (props) => {
  const { children, className } = props

  const classNames = classnames(
    'relative p-8 m-8',
    'bg-white box-content rounded-md shadow-md blur-none',
    className
  )

  return (<div className={classNames}>
    {children}
  </div>)
}

export default Card