import useAudio from '@/hooks/useAudio'

const Controls = () => {
  const audio = useAudio()

  return <div className="controls">
    {/* 按钮功能区 */}
    {/* <div className="menu">
      <button className='btn-item iconfont icon-prev1'></button>
      {
        isPlaying 
        ? (<button className='btn-item iconfont icon-pause' onClick={pause}></button>) 
        : (<button className='btn-item iconfont icon-play1' onClick={play}></button>)
      }
      <button className='btn-item iconfont icon-next'></button>
      {
        isMuted 
          ? (<button onClick={toggleVolumeMuted} className='btn-item iconfont icon-volume-x'></button>) 
            : (<button onClick={toggleVolumeMuted} className='btn-item iconfont icon-volume-'></button>)
      }
    </div> */}

    {/* 附加说明区域 -- 歌手信息 */}
    <div className="desc is-empty">
      <span>人间不值得</span>
      <span> -- </span>
      <span>黄诗扶</span>
    </div>

    <style jsx>{`
      .controls {
        width: auto;
        height: auto;
        padding: var(--padding-base);
        box-sizing: border-box;
      }

      .controls:hover .desc {
        visibility: visible;
        position: static;
        z-index: 0;
        transition: var(--transition-base);
      }

      .menu {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        opacity: 0.4;
        transition: opacity .5s ease;
      }

      .menu:hover {
        opacity: 1;
        transition: opacity .5s ease;
      }

      .desc {
        margin-top: .2em;
        text-align: center;
        font-size: var(--font-size-less);
        color: var(--color-base-5);
        transition: var(--transition-base);
      }

      .is-empty {
        visibility: hidden;
        position: absolute;
        right: -1000px;
        z-index: -9999;
        transition: var(--transition-base);
      }

      .btn-item {
        border: none;
        outline: none;
        color: var(--color-base-8);
        background-color: var(--color-gray-2);
        transition: var(--transition-base);
      }

      .btn-item+.btn-item {
        margin-left: var(--margin-base);
      }

      .btn-item:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
}

export default Controls