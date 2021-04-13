import Footer from '@/components/footer'
import Menu from '@/components/menu'
import Leave from '@/components/button/leave'
import Share from '@/components/button/share'
import Theme from '@/components/button/theme'
import Popup from '@/components/popup'
import Transition from '@/components/transition'
import dynaimc from 'next/dynamic'

import { ConfigProvider } from '@/components/ConfigProvider'

import styles from '@/styles/layout.module.css'

import config from '../global.config.json'

const DynaimcHeader = dynaimc(import('../components/header'), { ssr: false })

const Layout = (Component) => {

  const initialConfig = {
    theme: 'light',
    ...config
  }

  const { customName = 'default' } = Component

  const RouterItemProps = config['pages_title'][customName]

  return props => (<ConfigProvider value={initialConfig}>
    <div className={styles.layout}>
      <DynaimcHeader />
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
                <Component {...props} routerItemProps={RouterItemProps} />
              </Transition>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  </ConfigProvider>)
}

export default Layout