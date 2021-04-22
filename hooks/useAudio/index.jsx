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
  src: 'https://src.wuh.site/media/renjianbuzhide.mp3',
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
  audioRef.current = new createAudio({ src: 'https://src.wuh.site/media/renjianbuzhide.mp3' })
  const [config, setconfig] = useReducer(reducer, initialState, init)
  console.log(audioRef.current)

  const {
    src
  } = options
const player = {
  name: 'audio',
  src: 'https://baidu.com'
}
  // const player = useMemo(() => {
  //   if ('window' in global) {
  //     const audio = createAudio()
  //     audio.src = src
  //     audio.volume = getAudioVolume(config.volume)
  //     audio.muted = config.isMuted

  //     return audio
  //   }
  //   return {}
  // }, [])

  const togglePlayPause = useCallback(
    () => {
      if (!player) return 

      player.play()
    },
    [player],
  )

  const emit = useCallback(
    () => {
      const event = (eventName) => 
        player.addEventListener(eventName, () => options[eventName].apply(player, [player, { config, setconfig } ]), false)
      
      events.forEach(event)
    },
    [],
  )

  const play = () => {
    return player.play()
  }

  const pause = () => {
    return player.pause()
  }

  const onResetVolume = value => {
    const val = getAudioVolume(value)
    player.volume = val
    setconfig({
      type: 'VOLUME',
      payload: {
        volume: value
      }
    })
  }

  const incrementVolume = () => {
    const value = config.volume + STEP_VOLUME
    const minValue = Math.min(value, 100)
    onResetVolume(minValue)
  }

  const decrementVolume = () => {
    const value = config.volume - STEP_VOLUME
    const maxValue = Math.max(value, 0)
    onResetVolume(maxValue)
  }

  const toggleVolumeMuted = () => {
    const val = !config.isMuted
    player.muted = val
    setconfig({
      type: 'VOLUME',
      payload: {
        isMuted: val
      }
    })
  }

  useEffect(() => {
    // emit()
  }, [options])

  return {
    player,
    play,
    incrementVolume,
    decrementVolume,
    pause,
    ...config,
    togglePlayPause,
    toggleVolumeMuted,
    onResetVolume
  }
}

export default useAudio