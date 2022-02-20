import React from 'react'
import { useSelector } from 'react-redux'
import useControl from '@/hooks/useAudio/useControl'
import { RootModel } from '@/redux/models'

const AudioControl = () => {
  const [_, actions] = useControl()
  const store = useSelector((state: RootModel) => state.music)
  console.log('===== header.audioRef', store, actions)

  return (
    <div className="ww_audio">
      <div className="ww_audio__head"></div>
    </div>
  )
}

export default React.memo(AudioControl)
