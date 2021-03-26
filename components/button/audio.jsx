import { useRef, useEffect } from 'react'
import Player from '@/lib/player'

const Controls = () => {
  const player = useRef({})

  useEffect(() => {
    player.current = Player()
  }, [])

  return <div className="controls">
    <div className="menu">
      <button onClick={() => player.current.play()} className="item">Play</button>
      <button onClick={() => player.current.pause() } className="item">Pause</button>
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
      }

      .item {
        border: none;
        outline: none;
      }

      .item+.item {
        margin-left: 8px;
      }

      .item:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
}

export default Controls