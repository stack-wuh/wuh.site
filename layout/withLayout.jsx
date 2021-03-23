import Header from '@/components/header'
import Footer from '@/components/footer'
import Menu from '@/components/menu'
import ShareButton from '@/components/button/share'
import LeaveButton from '@/components/button/leave'
import ThemeSwithButton from '@/components/button/theme'
import Popup from '@/components/popup'
import { ConfigProvider } from '@/components/ConfigProvider'
import { Context as ResponsiveContext } from 'react-responsive'
import MediaLayout from '@/layout/media-layout'
import configProps from '../public/config.json'

const Layout = (Wrapper) => {
  const initialConfig = {
    themeMode: 'light',
    ...configProps
  }

  return (props) => (<div className='b-layout'>
    <ConfigProvider value={initialConfig}>
      <ResponsiveContext.Provider>
          <Header />
          <main className='main'>
            <MediaLayout.Desktop>
              <div className='slide-menu' >
                <Menu />
              </div>
            </MediaLayout.Desktop>
            <MediaLayout.Default>
              <div>
                <MediaLayout.MiddleScreen>
                  <ShareButton />
                  <LeaveButton />
                  <ThemeSwithButton />
                  <Popup />
                </MediaLayout.MiddleScreen>
                <div style={{ width: '60vw' }}>
                  <Wrapper {...props} />
                </div>
              </div>
            </MediaLayout.Default>
          </main>
          <Footer />
      </ResponsiveContext.Provider>
    </ConfigProvider>
    <style jsx global>{`
      .b-layout {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: var(--color-background-primary);
      }
      .header {}
      .main {
        display: flex;
        justify-content: flex-start;
        margin-top: 75px;
        width: 80%;
        transition: width 1s ease-in;
      }
      .slide-menu {
        width: 15% !important;
        margin-right: 20px;
      }
      .footer {}
    `}</style>
  </div>)
}

export default Layout