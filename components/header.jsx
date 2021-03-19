import Image from 'next/image'
import Head from 'next/head'

const Header = () => {
  return (<>
    <header className='header'>
      <Head>
        <link rel="icon" href="/image/avatar.jpeg" />
        <meta name='desciption' content="柴门闻犬吠, 风雪夜归人" />
      </Head>
      <div className='container'>
        <Image src="/favicon.ico" width={50} height={50} alt="favicon" />

        <strong className='title'>柴门闻犬吠, 风雪夜归人</strong>
      </div>
    </header>
    <style jsx>{`
      .header {
        position: fixed;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: rgb(255 255 255 / 51%);
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        -webkit-backdrop-filter: blur(5px);    
        backdrop-filter: blur(5px); 
        border-bottom: 1px solid #eee;
        box-shadow: 0 2px 2px 2px rgb(238 238 238 / 30%);
      }

      .header .container {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0 auto;
      }

      .header .container .title {
        font-size: 14px;
        // color: #1890ff;
        color: var(--primary-color);
        font-weight: normal;
      }
    `}</style>
  </>)
}

export default Header