'use client'
import * as React from 'react'
import Link from 'next/link'

interface IProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage: React.FC<IProps> = (props: IProps) => {
  return (
    <section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
      <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <img
          className='mx-auto h-12'
          src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
          alt=''
        />
        <figure className='mt-10'>
          <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
            <p className='text-rose-700'>{props.error.message}</p>
          </blockquote>
          <figcaption className='mt-10'>
            <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
              <Link
                href='/'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                返回首页
              </Link>
              <div className='font-semibold text-gray-900'>吴尒红 (Shadow)</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default ErrorPage
