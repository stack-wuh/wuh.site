import { useEffect, useCallback, useRef, useReducer } from 'react';
import createAudio from '@/lib/create-audio';

const STEP_VOLUME = 10

const events = [
  'play',
  'pause',
  'canplaythrough',
  'durationchange',
  'timeupdate',
  'volumechange'
]

const handlers = {
  play (_, { setconfig }) {
    console.log('======== play ========')
    setconfig({
      type: 'PLAY'
    })
  },

  pause (_, { setconfig }) {
    console.log('====== pause ======')
    setconfig({
      type: 'PAUSE'
    })
  },

  canplaythrough () {
    console.log('===== canplaythrough ======= ')
  },

  durationchange () {
    console.log('======== duration =======')
  },

  timeupdate (e, { setconfig }) {
    const process = Number((e.currentTime/e.duration*100).toFixed(2))
    console.log('=========== timeupdate =========')
    console.log('process: ', process)
    setconfig({ 
      type: 'PROCESS',
      payload: {
        process
      }
     })
  },
  volumechange (e) {
    console.log('========= volumechange ========')
    console.log(e.volume)
  }
}

const initOps = {
  src: 'https://web-origin.oss-cn-beijing.aliyuncs.com/media/renjianbuzhide.mp3',
  autoplay: false,
  ...handlers
}

function init (state) {
  return {
    process: state.process,
    volume: state.volume,
    isPlaying: state.isPlaying,
    audioStatus: state.audioStatus,
    isMuted: state.isMuted
  }
}

const initialState = {
  process: 0,
  volume: 30,
  audioStatus: 'peddding',
  isPlaying: false,
  isMuted: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true, audioStatus: 'play' }
    
    case 'PAUSE':
      return { ...state, isPlaying: false, audioStatus: 'pause' }

    case 'PROCESS': 
     return { ...state, isPlaying: true, audioStatus: 'play', ...action.payload }

    case 'VOLUME': 
      return { 
        ...state, 
        ...action.payload
    }

    default:
      return initialState
  }
}

const getAudioVolume = value => Number((value/100).toFixed(2))

const useAudio = (options = initOps) => {
  const audioRef = useRef()
  useEffect(() => {
    console.log('asdasdasd == ', options)
    document.onreadystatechange = () => {
      console.log(document.readyState)
    }    
  }, [])
  audioRef.current = new createAudio({ src: 'https://web-origin.oss-cn-beijing.aliyuncs.com/media/renjianbuzhide.mp3' })
  console.log('audio ref.current.audio', audioRef.current.audio)

  return {
    // player,
    play,
    // incrementVolume,
    // decrementVolume,
    pause,
    // ...config,
    // togglePlayPause,
    // toggleVolumeMuted,
    // onResetVolume
  }
}

export default useAudio