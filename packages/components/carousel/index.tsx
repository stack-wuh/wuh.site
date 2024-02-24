'use client'
import * as React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

const Carousel: React.FC = () => {
  return (<div className={classnames(styles.wCarousel)}>
    <p>轮播区</p>
  </div>)
}

export default Carousel