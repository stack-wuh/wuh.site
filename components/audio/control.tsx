import React from 'react'
import useControl from '@/hooks/useAudio/useControl'

const AudioControl = () => {
  const [audioRef, actions] = useControl()
  console.log('===== header.audioRef', audioRef, actions)

  return (
    <div className="ww_audio">
      <div className="ww_audio__head">
        <span></span>
      </div>
    </div>
  )
}

export default React.memo(AudioControl)
