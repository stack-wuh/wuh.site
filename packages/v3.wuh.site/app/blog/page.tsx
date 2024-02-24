'use client'
import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page: React.FC = () => {
  const router = useRouter()

  const handleGotoBack = () => {
    router.back()
  }

  return (<div className='page'>
    <p>Hello, blog!</p>

    <div>
      <Link href='/' scroll={false}>goto home</Link>
      <div onClick={handleGotoBack}>hooks goto back</div>
    </div>
  </div>)
}

export default Page