import useAudio from '@/hooks/useAudio'

const Controls = () => {
  const { 
    play, 
    pause, 
    isPlaying, 
    toggleVolumeMuted,
    isMuted
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
        isMuted 
          ? (<button onClick={toggleVolumeMuted} className='btn-item iconfont icon-volume-x'></button>) 
            : (<button onClick={toggleVolumeMuted} className='btn-item iconfont icon-volume-'></button>)
      }
    </div>
    <style jsx>{`
      .controls {
        width: auto;
        height: auto;
        padding: var(--padding-base);
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