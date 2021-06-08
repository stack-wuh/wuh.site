import React, { useEffect, useRef, useCallback, useState } from 'react'
import CreateAudio from '@/lib/create-audio'
import useForceupdate from '@/hooks/forceUpdata'

const AudioContext = React.createContext({
  key: '@@audio'
})

export { AudioContext }

const singleAudio = (() => {
  let instance = null
  
  const run = function (props) {
    if (!instance) {
      instance = new CreateAudio(props)
    }

    return instance
  }

  return run
})()

const AudioProvider = ({
  children
}) => {
  const [audioProps, setAudioProps] = useState(null)
  const audioRef = useRef()
  const forceUpdate = useForceupdate()

  useEffect(() => {
    audioRef.current = singleAudio({ src: 'https://src.wuh.site/media/renjianbuzhide.mp3' })
    forceUpdate()

    return () => {
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    setAudioProps(audioProps)
  }, [audioRef.current])

  const toggleVolumeMuted = () => {
    if (audioRef.current) {
      audioRef.current.onToggleMuted()
    }
    forceUpdate()
  }

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.onPlay()
    }
    forceUpdate()
  }, [audioRef.current])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.onPause()
    }
    forceUpdate()
  }, [audioRef.current])

  const value = {
    ...audioRef.current,
    ...audioProps,
    toggleVolumeMuted,
    play,
    pause
  }

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider