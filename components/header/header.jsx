import Image from 'next/image'
import Head from 'next/head'
import AudioControls from '@/components/button/audio'
import { withConfig } from '@/components/ConfigProvider'

const Header = ({
  title
}) => {
  return (<>
    <header className='header'>
      <Head>
        <link rel="icon" href="/image/avatar.jpeg" />
      </Head>
      <div className='container'>
        <div className='lf'>
          <Image src="/image/avatar.jpeg" width={50} height={50} alt="favicon" />
          <strong className='title'>{title}</strong>
        </div>
        <div className='empty'></div>
        <div className="rg">
          <AudioControls />
        </div>
      </div>
    </header>
    <style jsx>{`
      .header {
        position: fixed;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: var(--color-background-header);
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        -webkit-backdrop-filter: blur(5px);    
        backdrop-filter: blur(5px); 
        border-bottom: 1px solid var(--color-border);
        box-shadow: 0 2px 2px 2px var(--color-shadow);
        // transition: var(--transition-base);
      }

      .header .container {
        display: flex;
        align-items: center;
        width: 1060px;
        margin: 0 auto;
      }

      .header .container .title {
        font-size: 14px;
        color: var(--primary-color);
        font-weight: normal;
        transition: color .5s ease-in;
      }

      .lf {
        display: flex;
        align-items: center;
      }
      .empty {
        flex: 1;
      }
    `}</style>
  </>)
}

export default withConfig(Header)