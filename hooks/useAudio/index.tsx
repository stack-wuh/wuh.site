import React, { useContext, useRef } from 'react'
import createAudio from '@/lib/createAudio'
const audioInstance = new createAudio()._instance

const AudioContext = React.createContext<HTMLAudioElement | null>(null)

const AudioProvider = (props: any) => {
  const audioRef = useRef<HTMLAudioElement | null>(audioInstance)

  return <AudioContext.Provider value={audioRef.current}>
    {props.children}
  </AudioContext.Provider>
}

export const useAudioContext = () => {
  const context = useContext(AudioContext)

  return context
}

export default React.memo(AudioProvider)