import Header from '@/components/header'
import Footer from '@/components/footer'
// import Menu from '@/components/menu'
// import ShareButton from '@/components/button/share'
// import LeaveButton from '@/components/button/leave'
// import ThemeSwithButton from '@/components/button/theme'
// import Popup from '@/components/popup'
import { ConfigProvider } from '@/components/ConfigProvider'
// import { Context as ResponsiveContext } from 'react-responsive'
// import MediaLayout from '@/layout/media-layout'

const Layout = (Wrapper) => {
  return props => (<div className='g-layout'>
      <ConfigProvider.Provider>
        <Header />
        <main className='g-container'>
          <div className='main'>
            <div className='nav'>
              {/* <nav className='menu'> </nav> */}
            </div>

            <div className="body">
              <Wrapper {...props} />
            </div>
          </div>
        </main>
        <Footer />
      </ConfigProvider.Provider>
    </div>)
}

export default Layout