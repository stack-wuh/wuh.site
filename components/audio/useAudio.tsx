import { useCallback, useMemo, useReducer, useEffect } from 'react'
import { useAudioContext } from '@/hooks/useAudio'
import { useEventListener } from 'ahooks'

interface IAudioStateProps extends HTMLAudioElement { }
interface IAudioStateProps extends IAudioValueProps { }

const initalStateProps: Pick<IAudioStateProps, keyof IAudioValueProps> = {
  muted: false,
  mutedStatus: 'open',
  volume: 0.5,
  isplaying: false,
  autoplay: false,
  isInit: true,
  canplay: false,
  playStatus: 'pedding',
  customduration: 0,
  currentTime: 0,
  process: 0,
  traceIndex: 0
}

type TPlayTypes = 'play' | 'pause' | 'pedding' | 'end'
type TMutedTypes = 'open' | 'close'
interface IAudioValueProps {
  // 是否静音
  muted: boolean,
  // 当前播放器静音状态值
  mutedStatus: TMutedTypes,
  // 当前播放器音量
  volume: number,
  // 当前Audio实例的播放状态
  isplaying: boolean,
  // 当前播放状态的事件名
  playStatus: TPlayTypes,
  // Audio 是否自动播放
  autoplay: boolean,
  // 是否是初次加载
  isInit: boolean,
  // 当前文件是否已加载完毕，可以播放
  canplay: boolean,
  // 当前媒体的总时长
  customduration: number,
  // 当前媒体的播放进度
  currentTime: number,
  // 播放进度条
  process: number,
  // 当前播放列表的序号
  traceIndex: number
}

interface ITraceItem { }
interface IAudioOpsProps {
  autoplay?: boolean,
  traceList: ITraceItem[]
}

interface IAudioActionProps {
  onToggleMuted: (value: boolean) => void,
  onToggleVolume: () => void,
  onPlay: () => void,
  onPause: () => void,
  onNext: () => void,
  onPrev: () => void
}

type TActionNames = 'MUTED' | 'VOLUME' | 'PLAY' | 'AUTOPLAY' | 'STATUS' | 'INIT'
function AudioReducer(state: Pick<IAudioValueProps, keyof IAudioValueProps>, action: { type: TActionNames, payload: IAudioValueProps }) {
  switch (action.type) {
    case 'MUTED':
      return { ...state, muted: action.payload.muted, mutedStatus: action.payload.mutedStatus }
    case 'VOLUME':
      return { ...state, volume: action.payload.volume || state.volume }
    case 'PLAY':
      return { ...state, isplaying: action.payload.isplaying, playStatus: action.payload.playStatus }
    case 'AUTOPLAY': {
      return { ...state, autoplay: action.payload.autoplay }
    }
    case 'STATUS':
      return { ...state, ...action.payload }
    case 'INIT':
      return { ...state, ...action.payload }
    default: return state
  }
}

const useAudio = (ops?: IAudioOpsProps): [IAudioValueProps, IAudioActionProps] => {
  // 缓存Audio的实例
  const audioRef = useAudioContext()
  const [state, dispatch] = useReducer(AudioReducer, initalStateProps)

  const actions = useMemo(() => {
    // 设置Audio的muted属性, 控制是否静音
    const setMuted = (value: boolean) => {
      if (audioRef) {
        audioRef.muted = value
      }
      dispatch({ type: 'MUTED', payload: { ...state, muted: value, mutedStatus: value ? 'open' : 'close' } })
    }

    // 设置Audio的volume属性, 初始值为0.5
    const setVolume = (value: number) => {
      if (audioRef) {
        audioRef.volume = value
      }
      dispatch({ type: 'VOLUME', payload: { ...state, volume: value } })
    }

    // 设置Audio播放状态
    const setPlayStatus = (value: boolean, status: TPlayTypes) => {
      setTimeout(() => {
        dispatch({ type: 'PLAY', payload: { ...state, isplaying: value, playStatus: status } })
      })
    }

    // 获取当前Audio的播放进度
    const getPlayingProcess = (duration: number, currentTime: number): number => {
      if (!currentTime) return 0

      return Math.floor(currentTime / duration * 100)
    }

    return {
      setMuted, setVolume, setPlayStatus, getPlayingProcess
    }
  }, [])

  useEventListener('durationchange', () => {
    if (audioRef) {
      const { duration, currentTime } = audioRef
      const process = actions.getPlayingProcess(duration, currentTime)
      dispatch({ type: 'STATUS', payload: { ...state, customduration: duration, currentTime, process } })
    }
  }, { target: audioRef })

  useEventListener('timeupdate', () => {
    if (audioRef) {
      const { duration, currentTime } = audioRef
      const process = actions.getPlayingProcess(duration, currentTime)
      dispatch({ type: 'STATUS', payload: { ...state, customduration: duration, currentTime, process, isplaying: true, isInit: false, canplay: true, playStatus: 'play' } })
    }
  }, { target: audioRef })

  useEventListener('loadeddata', () => {
    console.log('第一帧加载完成')
  }, { target: audioRef })

  useEventListener('canplaythrough', () => {
    dispatch({ type: 'STATUS', payload: { ...state, canplay: true } })
    console.log('可以播放')
  }, { target: audioRef })

  useEventListener('ended', () => {
    console.log('播放结束了')
  }, { target: audioRef })

  const onPlay = useCallback(
    () => {
      audioRef?.play()
      actions.setPlayStatus(true, 'play')
    },
    []
  )

  const onPause = useCallback(
    () => {
      audioRef?.pause()
      actions.setPlayStatus(false, 'pause')
    },
    [],
  )

  const onPrev = useCallback(
    () => {
    },
    [],
  )

  const onNext = useCallback(
    () => {
    },
    [],
  )

  const onToggleMuted = useCallback(
    (val) => {
      actions.setMuted(val)
    },
    []
  )

  const onToggleVolume = useCallback(
    () => {
      actions.setVolume(0.3)
    },
    [],
  )

  const init = useCallback(
    () => {
      if (state.isInit && audioRef && !audioRef.src) {
        dispatch({ type: 'INIT', payload: { ...state, isInit: false } })
        audioRef.src = '/media/music.mp3'
        audioRef.autoplay = ops?.autoplay ?? false
      }
    },
    [audioRef],
  )

  useEffect(() => {
    init()
  }, [])

  return [state, { onToggleMuted, onToggleVolume, onPause, onPlay, onPrev, onNext }]
}

export default useAudio