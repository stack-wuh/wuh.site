import Affix from '@/components/affix'
import Space from '@/components/space'
import useScroll from '@/hooks/useScroll'

const Leave = () => {
  const { scrollTo, scrollTop } = useScroll({
    getContainer: () => document.querySelector('main')
  })

  return <div className="leave">
    <Affix right="10vh" bottom="10vh">
      <Space direction='column' size={0} bordered style={{ padding: 0 }}>
        <button tabIndex='1' type='button' name='rss' className='btn is-focus'>
          <a className='iconfont icon-Rss btn btn-a' href="https://src.wuh.site/common/rss.xml" target="_blank" rel="external" />
        </button>
        <button tabIndex="1" type='button' name='up' className='btn is-focus' onClick={scrollTop}>
          <i className='iconfont icon-up' />
        </button>
        <button tabIndex="1" type='button' name='down' className='btn is-focus' onClick={scrollTo}>
          <i className='iconfont icon-down' />
        </button>
        <a tabIndex="1" className='iconfont icon-email btn btn-a is-focus' href='mailto:wuh131420@foxmail.com' />
      </Space>
    </Affix>
    <style jsx>{`
      .leave {
        background-color: var(--color-text-less);
        color: var(--color-text-less);
        transition: all .5s ease;
      }
      .btn {
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 0;
        margin: 0;
        background-color: var(--color-background-button);
        color: var(--color-text-less);
        transition: all .5s ease;
        font-size: 24px;
        text-align: center;
        line-height: 40px;
        outline: none;
        border: none;
      }
      .btn-a {
        text-align: center;
        text-decoration: none;
        font-size: 22px;
      }
      .btn:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
}

export default Leave