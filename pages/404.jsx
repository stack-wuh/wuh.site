import Link from 'next/link'
import Head from 'next/head'

const NotPage = () => {
  return (<>
  <Head>
    <title>吴尒红 | 资源更新了 -- wuh.site</title>
  </Head>
   <div className="nopage">
      <div className="content">
        <h4 className='title'>404</h4>
        <p className='desc'>~~资源地址已更新~~</p>

        <Link href="/">
          <a className='btn' href="https://wuh.site" role='button' tabIndex={0}>更多</a>
        </Link>
      </div>

      <style jsx>{`
        .nopage {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
          padding: 1rem;
          box-sizing: border-box;
          overflow: hidden;
        }
        .content {
          margin-top: -20%;
        }
        .title {
          margin: 0;
          font-size: 3.125rem;
        }
        .btn {
          display: inline-block;
          font-size: 14px;
          padding: 4px 24px;
          border-radius: 8px;
          border-bottom: 1px solid var(--primary-color);
          text-decoration: none;
          color: var(--primary-color);
          box-shadow: 0 0 2px var(--primary-color);
        }
      `}</style>
    </div>
  </>)
}

export async function getStaticProps () {
  return {
    props: {}
  }
}

export default NotPage