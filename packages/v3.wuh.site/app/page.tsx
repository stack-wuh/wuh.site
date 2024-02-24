import { WHeader, WFooter, WCard, WCarousel, WTag, Space } from '@wuh/components'
import Link from 'next/link'
import classnames from 'classnames'

const Home = () => {
  return (
    <main className='bg-white scroll-smooth overscroll-auto relative'>
      <WHeader />
      <div className='h-screen section1 transition-all duration-300 ease-linear bg-blend-color bg-center bg-cover bg-fixed overflow-hidden flex align-center justify-center'>
        <WCard id="section1" className={classnames('w-full', 'm-20')}>
          <div className='flex justify-start align-start'>
            <div className="lf flex w-7/12 justify-start align-center flex-wrap">
              <div className='w-full'>
                <WCarousel></WCarousel>
              </div>
              <div className='w-full mt-4'>
                <Space size='small'>
                  <WTag>
                    <span>前端</span>
                  </WTag>
                  <WTag>
                    <span>Mongo</span>
                  </WTag>
                  <WTag>
                    <span>Node</span>
                  </WTag>
                  <WTag>
                    <span>服务器</span>
                  </WTag>
                  <WTag>
                    <span>日常</span>
                  </WTag>
                </Space>
              </div>
              <div className='w-full mt-4'>
                <Space size='small'>
                  <WTag>
                    <span>Vue</span>
                  </WTag>
                  <WTag>
                    <span>React</span>
                  </WTag>
                  <WTag>
                    <span>Nodejs</span>
                  </WTag>
                  <WTag>
                    <span>Nextjs</span>
                  </WTag>
                  <WTag>
                    <span>Nginx</span>
                  </WTag>
                  <WTag>
                    <span>Dayli</span>
                  </WTag>
                </Space>
              </div>
            </div>
            <div className='rg w-5/12'>
  
            </div>
          </div>
        </WCard>
      </div>
      <div className='h-screen transition-all duration-300 ease-linear bg-section2 bg-center bg-cover bg-fixed overflow-hidden'>
        <div className='w-64 h-64 p-12 m-12 bg-red-300'>
          <p id='section2'>去Music</p>
          <div>
            <Link href='/music'>blog</Link>
          </div>
        </div>
      </div>
      <div className='h-screen transition-all duration-300 ease-linear bg-section3 bg-center bg-cover bg-fixed overflow-hidden'>
        <div className='w-64 h-64 p-12 m-12 bg-red-300'>
          <p id='section3'>滚动之后去明细页</p>
          <div>
            <Link href='/blog'>blog</Link>
          </div>
        </div>
      </div>
      <WFooter />
    </main>
  )
}

export default Home
