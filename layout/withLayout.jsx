import Header from '@/components/header'
import Footer from '@/components/footer'
import Menu from '@/components/menu'
import Leave from '@/components/button/leave'
import Share from '@/components/button/share'
import Theme from '@/components/button/theme'
import Popup from '@/components/popup'
import Transition from '@/components/transition'

import { ConfigProvider } from '@/components/ConfigProvider'

import styles from '@/styles/layout.module.css'

import config from '../global.config.json'

const Layout = (Component) => {

  const initialConfig = {
    theme: 'light',
    ...config
  }

  return props => (<ConfigProvider value={initialConfig}>
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>
        <Leave />
        <Share />
        <Theme />
        <Popup />
          <div className={styles.main}>
            <div className={styles.nav}>
              <Menu className={styles.menu} />
            </div>

            <div className={styles.body}>
              <Transition>
                <Component {...props} />
              </Transition>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  </ConfigProvider>)
}

export default Layout