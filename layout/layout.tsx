import * as React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import MenuNav from '@/components/menu/nav'
import { BehaviorButtonGroup, StateButtonGroup, LinkButtonGroup, GalleryButton } from '@/components/button'

import Response from './response'

const BackgroundWrapper: React.FC = () => (<div className='background'></div>)
const ConfigWrapper: React.FC = () => (<div className='config'>
  <BackgroundWrapper />
  <LinkButtonGroup />
  <StateButtonGroup />
  <BehaviorButtonGroup />
  <GalleryButton />
</div>)

function Layout<T>(Component: React.ComponentType<T>) {
  const inner = (props: T) => {
    return (<Response>
      <ConfigWrapper />
      <Header />
      <main className="main-container">
        <div className="main-nav">
          <MenuNav />
        </div>
        <div className="main main-pc">
          <Component {...props} />
        </div>
        <div className="main-aside"></div>
      </main>
      <Footer />
    </Response>)
  }
  inner.displayName = Component.displayName || 'InnerComponent'
  return inner
}
Layout.displayName = 'withLayout'

export default Layout