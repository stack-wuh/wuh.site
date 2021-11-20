import { useCallback, useMemo, useReducer, useEffect } from 'react'
import { useAudioContext } from '@/hooks/useAudio'
import { useEventListener, useDebounceEffect } from 'ahooks'
import config from '@/constant/res.json'

interface IAudioStateProps extends HTMLAudioElement {}
interface IAudioStateProps extends IAudioValueProps {}

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
	traceIndex: 0,
	initialTrace: (config as any).playlist.data.rows[0],
}

type TPlayTypes = 'play' | 'pause' | 'pedding' | 'end'
type TMutedTypes = 'open' | 'close'
interface IAudioValueProps {
	// 是否静音
	muted: boolean
	// 当前播放器静音状态值
	mutedStatus: TMutedTypes
	// 当前播放器音量
	volume: number
	// 当前Audio实例的播放状态
	isplaying: boolean
	// 当前播放状态的事件名
	playStatus: TPlayTypes
	// Audio 是否自动播放
	autoplay: boolean
	// 是否是初次加载
	isInit: boolean
	// 当前文件是否已加载完毕，可以播放
	canplay: boolean
	// 当前媒体的总时长
	customduration: number
	// 当前媒体的播放进度
	currentTime: number
	// 播放进度条
	process: number
	// 当前播放列表的序号
	traceIndex: number
	initialTrace: ITraceItem
}

export interface ITraceItem {
	url: string
	id: number
	name: string
	by: string
	[k: string]: unknown
}
export interface IAudioOpsProps {
	autoplay?: boolean
	traceList: ITraceItem[]
}

export interface IAudioActionProps {
	onToggleMuted: (value: boolean) => void
	onToggleVolume: () => void
	onPlay: () => void
	onPause: () => void
	onNext: () => void
	onPrev: () => void
}

type TActionNames = 'MUTED' | 'VOLUME' | 'PLAY' | 'AUTOPLAY' | 'STATUS' | 'INIT'
function AudioReducer(
	state: Pick<IAudioValueProps, keyof IAudioValueProps>,
	action: { type: TActionNames; payload: IAudioValueProps }
) {
	switch (action.type) {
		case 'MUTED':
			return {
				...state,
				muted: action.payload.muted,
				mutedStatus: action.payload.mutedStatus,
			}
		case 'VOLUME':
			return { ...state, volume: action.payload.volume || state.volume }
		case 'PLAY':
			return {
				...state,
				isplaying: action.payload.isplaying,
				playStatus: action.payload.playStatus,
			}
		case 'AUTOPLAY': {
			return { ...state, autoplay: action.payload.autoplay }
		}
		case 'STATUS':
			return { ...state, ...action.payload }
		case 'INIT':
			return { ...state, ...action.payload }
		default:
			return state
	}
}

const useAudio = (
	ops: IAudioOpsProps
): [IAudioValueProps, IAudioActionProps] => {
	// 缓存Audio的实例
	const audioRef = useAudioContext()
	const [state, dispatch] = useReducer(AudioReducer, initalStateProps)

	const actions = useMemo(() => {
		// 设置Audio的muted属性, 控制是否静音
		const setMuted = (value: boolean) => {
			if (audioRef) {
				audioRef.muted = value
			}
			dispatch({
				type: 'MUTED',
				payload: {
					...state,
					muted: value,
					mutedStatus: value ? 'open' : 'close',
				},
			})
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
				dispatch({
					type: 'PLAY',
					payload: { ...state, isplaying: value, playStatus: status },
				})
			})
		}

		// 获取当前Audio的播放进度
		const getPlayingProcess = (
			duration: number,
			currentTime: number
		): number => {
			if (!currentTime) return 0

			return Math.floor((currentTime / duration) * 100)
		}

		return {
			setMuted,
			setVolume,
			setPlayStatus,
			getPlayingProcess,
		}
	}, [audioRef, state])

	useEventListener(
		'durationchange',
		() => {
			if (audioRef) {
				const { duration, currentTime } = audioRef
				const process = actions.getPlayingProcess(duration, currentTime)
				dispatch({
					type: 'STATUS',
					payload: { ...state, customduration: duration, currentTime, process },
				})
			}
		},
		{ target: audioRef }
	)

	useEventListener(
		'timeupdate',
		() => {
			if (audioRef) {
				const { duration, currentTime } = audioRef
				const process = actions.getPlayingProcess(duration, currentTime)
				dispatch({
					type: 'STATUS',
					payload: {
						...state,
						customduration: duration,
						currentTime,
						process,
						isplaying: true,
						isInit: false,
						canplay: true,
						playStatus: 'play',
					},
				})
				audioRef.canplay = true
			}
		},
		{ target: audioRef }
	)

	useEventListener(
		'loadeddata',
		() => {
			console.log('第一帧加载完成')
		},
		{ target: audioRef }
	)

	useEventListener(
		'canplaythrough',
		() => {
			dispatch({ type: 'STATUS', payload: { ...state, canplay: true } })
			if (audioRef) {
				audioRef.canplay = true
			}
			console.log('可以播放')
		},
		{ target: audioRef }
	)

	useEventListener(
		'ended',
		() => {
			console.log('播放结束了')
		},
		{ target: audioRef }
	)

	const onPlay = useCallback(() => {
		audioRef?.play()
		actions.setPlayStatus(true, 'play')
	}, [actions, audioRef])

	const onPause = useCallback(() => {
		audioRef?.pause()
		actions.setPlayStatus(false, 'pause')
	}, [audioRef, actions])

	const onPrev = useCallback(() => {
		if (audioRef) {
			audioRef.traceIndex = (audioRef.traceIndex ?? 1) - 1
			audioRef.traceIndex = Math.max(audioRef.traceIndex, 0)
			dispatch({
				type: 'STATUS',
				payload: { ...state, traceIndex: audioRef.traceIndex },
			})

			audioRef.src = ops.traceList[state.traceIndex].url
		}
	}, [audioRef, ops.traceList.length])

	const onNext = useCallback(() => {
		if (audioRef) {
			audioRef.traceIndex = (audioRef.traceIndex ?? 0) + 1
			audioRef.traceIndex = Math.min(audioRef.traceIndex, ops.traceList.length)
			dispatch({
				type: 'STATUS',
				payload: { ...state, traceIndex: audioRef.traceIndex },
			})

			audioRef.src = ops.traceList[state.traceIndex].url
		}
	}, [audioRef, ops.traceList.length])

	const onToggleMuted = useCallback((val) => {
		actions.setMuted(val)
	}, [])

	const onToggleVolume = useCallback(() => {
		actions.setVolume(0.3)
	}, [])

	const initialTrace = useMemo(() => {
		if (audioRef) {
			const { traceIndex = 0 } = audioRef

			return ops.traceList[traceIndex]
		}

		return ops.traceList[0]
	}, [audioRef, ops.traceList.length])

	const init = useCallback(() => {
		if (audioRef && audioRef.isInit && ops.traceList.length) {
			const initiValue = {
				isInit: false,
				traceIndex: 0,
				autoplay: ops?.autoplay ?? false,
			}
			audioRef.src = initialTrace.url
			audioRef.isInit = initiValue.isInit
			audioRef.traceIndex = initiValue.traceIndex
			audioRef.autoplay = initiValue.autoplay
			dispatch({ type: 'INIT', payload: { ...state, ...initiValue } })
		}

		if (audioRef && audioRef.canplay) {
			const { canplay } = audioRef
			dispatch({ type: 'STATUS', payload: { ...state, canplay } })
		}
	}, [audioRef, ops.traceList.length])

	useDebounceEffect(
		() => {
			init()
		},
		[audioRef, ops.traceList.length],
		{ wait: 3000 }
	)

	return [
		{ ...state, initialTrace },
		{ onToggleMuted, onToggleVolume, onPause, onPlay, onPrev, onNext },
	]
}

export default useAudio
