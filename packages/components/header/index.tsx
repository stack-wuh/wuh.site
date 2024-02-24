'use client'
import * as React from 'react'
import classnames from 'classnames'

import Link from 'next/link'
import * as styles from './header.module.css'

const Header: React.FC = (props) => {

  return (
    <header className='header w-full sticky h-28 top-0 left-0 right-0 z-[100] backdrop-blur-sm bg-white/80 shadow-md'>
      <div className='w-full h-full flex justify-between items-center px-8 py-4'>
        <div className='logo-wrapper flex justify-start items-center'>
          <div className={classnames(styles.logo, 'w-64', 'h-12')}></div>
        </div>
        <div>
          <ul className={classnames('flex justify-start items-center gap-8', 'text-lg text-gray-600')}>
            <li className={classnames('hover:text-blue-400 transition-colors duration-300 ease-linear', { 'border-b-4 border-indigo-500': ''.includes('section1') })}><Link href="#section1">博客</Link></li>
            <li className={classnames('hover:text-blue-400 transition-colors duration-300 ease-linear', { 'border-b-4 border-indigo-500': ''.includes('section2') })}><Link href="#section2">网抑云</Link></li>
            <li className={classnames('hover:text-blue-400 transition-colors duration-300 ease-linear', { 'border-b-4 border-indigo-500': ''.includes('section3') })}><Link href="#/section3">笔记</Link></li>
            <li className={classnames('hover:text-blue-400 transition-colors duration-300 ease-linear', { 'border-b-4 border-indigo-500': ''.includes('section4') })}><Link href="#/section4">关于我</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
