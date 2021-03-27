import useAudio from '@/hooks/useAudio'

const Controls = () => {
  const { 
    play, 
    pause, 
    isPlaying, 
    toggleVolume,
    isVolume
  } = useAudio()

  return <div className="controls">
    <div className="menu">
      <button className='btn-item iconfont icon-prev1'></button>
      {
        isPlaying 
        ? (<button className='btn-item iconfont icon-pause' onClick={pause}></button>) 
        : (<button className='btn-item iconfont icon-play1' onClick={play}></button>)
      }
      <button className='btn-item iconfont icon-next'></button>
      {
        isVolume 
          ? (<button onClick={toggleVolume} className='btn-item iconfont icon-volume-x'></button>) 
            : (<button onClick={toggleVolume} className='btn-item iconfont icon-volume-'></button>)
      }
    </div>
    <style jsx>{`
      .controls {
        width: auto;
        height: auto;
        padding: 8px;
        box-sizing: border-box;
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

      .btn-item {
        border: none;
        outline: none;
        background-color: #fff;
      }

      .btn-item+.btn-item {
        margin-left: 8px;
      }

      .btn-item:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
}

export default Controls