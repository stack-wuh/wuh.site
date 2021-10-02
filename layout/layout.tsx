import * as React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Response from './response'

const BackgroundWrapper: React.FC = () => (<div className='background'></div>)
const ConfigWrapper: React.FC = () => (<div className='config'>
  <BackgroundWrapper />
</div>)

function Layout<T>(Component: React.ComponentType<T>) {
  const inner = (props: T) => {
    return (<Response>
      <ConfigWrapper />
      <Header />
      <main className="main-container">
        <div className="main-nav">
          nav
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