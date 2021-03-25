import Divider from '@/components/divider'

const Aggrega = () => {
  
  return <div className="aggrega">
    <div className='body'>
      <div className="header" />
      <div className="master">
        <span className='name'>闷油瓶</span>
        <span className='text'>远处蔚蓝天空下涌动着</span>
        <span className='text'>金色的麦浪</span>
      </div>
    </div>
    
    <Divider size={0.5} />
    <div className='btm'>
      <span>别点我</span>
    </div>
    <style jsx>{`
      .aggrega {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 300px;
        padding: 6px;
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid var(--color-border);
        transition: all .5s ease;
      }

      .outer {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      .body {
        position: relative;
        flex: 1;
        width: 100%;
        text-align: center;
      }

      .body .header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 110px;
        margin: 0 auto;
        border: 4px solid red;
        border-radius: 50%;
        overflow: hidden;
        background: url(https://src.wuh.site/common/avatar.jpg) center center no-repeat;
        background-size: 80%;
      }

      .body .master {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .name {
        font-size: 17px;
        font-weight: bold;
        line-height: 2em;
      }
      .text {
        font-size: 14px;
        line-height: 1.5em;
      }

      .btm {
        padding: 8px;
        text-align: center;
        box-sizing: border-box;
        z-index: 999;
      }

      .btm:hover {
        cursor: not-allowed;
      }
    `}</style>
  </div>
}

export default Aggrega