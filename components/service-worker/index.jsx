import { AmpIncludeAmpInstallServiceworker } from '../amp/AmpCustomElement'
import Head from 'next/head'

const THEME_COLOR = '#005af0'

const withServiceWorker = ({
  children
}) => {
  return (<>
    <Head>
      <meta name='theme-color' content={THEME_COLOR} />
      <link rel="manifest" href="/manifest.json"/>
    </Head>
    {children}
    <AmpIncludeAmpInstallServiceworker />
    <amp-install-serviceworker 
      src="/service-worker.js"
      data-iframe-src="/install-serviceworker.html"
      layout="nodisplay" />
  </>)
}

export default withServiceWorker