import React, { useEffect, useRef } from 'react'
import CreateAudio from '@/lib/create-audio'

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
  const audioRef = useRef()

  useEffect(() => {
    let isMounted = false
    if (!isMounted) {
      audioRef.current = singleAudio({ src: 'https://src.wuh.site/media/renjianbuzhide.mp3' })
    }
    return () => {
      audioRef.current = null
      isMounted = true
    }
  }, [])

  const value = {
    audio: audioRef.current
  }

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider