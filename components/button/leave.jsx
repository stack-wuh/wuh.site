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
        <button className='btn' onClick={scrollTop}>
          <i className='iconfont icon-up' />
        </button>
        <button className='btn' onClick={scrollTo}>
          <i className='iconfont icon-down' />
        </button>
        <a className='iconfont icon-email btn btn-a' href='mailto:wuh131420@foxmail.com' />
      </Space>
    </Affix>
    <style jsx>{`
      .leave {
        background-color: #fff;
        color: #333;
      }
      .btn {
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 0;
        margin: 0;
        background-color: #fff;
        color: #333;
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