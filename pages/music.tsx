import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootModel } from '@/redux/models'
import { TMusicProps } from '@/redux/models/music'
import useControl from '@/hooks/useAudio/useControl'

type TProps = {}

function useData() {
  const store = useSelector((state: RootModel) => state.music)
  const dispatch = useDispatch()

  return {
    store,
    dispatch,
  }
}

const Music: React.FC<TProps> = props => {
  const { store } = useData()
  const { current, player, track } = store as unknown as TMusicProps
  const [audioRef, actions] = useControl()

  const handleClickItem = (id: number) => {
    actions.onFetchPlayer({ id })
  }

  return (
    <div className="ww_music">
      <h3>
        {current.name} --- {player.id}
      </h3>
      <div>状态栏</div>
      <div>
        <p>是否可以播放: {JSON.stringify(track.canplay)}</p>
        <p>播放状态: {track.audioStatus}</p>
      </div>

      <ul>
        {(current.tracks || []).map(item => (
          <li key={item.id} onClick={() => handleClickItem(item.id)}>
            <span>{item.name}</span>
            <span>--{item.author}</span>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={actions.onPlay}>play</button>
        <button onClick={actions.onPause}>pause</button>
      </div>
    </div>
  )
}

export default Music
