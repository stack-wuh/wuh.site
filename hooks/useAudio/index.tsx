import React, { useContext, useRef } from 'react'
import createAudio from '@/lib/createAudio'
const audioInstance = new createAudio()._instance

export interface ICustomAudioProps extends HTMLAudioElement {
	// Audio 的实例是否已加载, 初始化默认为true
	isInit?: boolean
	// Audio 实例当前缓存的播放列表序号
	traceIndex?: number
	// Audio 实例当前的播放状态
	isplaying?: boolean
}

export const inititalAudioProps = {
	isInit: true,
	traceIndex: 0,
	isplaying: false,
}

const AudioContext = React.createContext<ICustomAudioProps | null>(null)

const AudioProvider: React.FC<{}> = (props) => {
	const audioRef = useRef<ICustomAudioProps | null>(audioInstance)
	if (audioRef.current) {
		audioRef.current.isInit =
			typeof audioRef.current.isInit !== 'undefined'
				? audioRef.current.isInit
				: true
		audioRef.current.traceIndex =
			typeof audioRef.current.traceIndex !== 'undefined'
				? audioRef.current.traceIndex
				: 0
		audioRef.current.isplaying =
			typeof audioRef.current.isplaying !== 'undefined'
				? audioRef.current.isplaying
				: false
	}

	return (
		<AudioContext.Provider value={audioRef.current}>
			{props.children}
		</AudioContext.Provider>
	)
}

export const useAudioContext = () => {
	const context = useContext(AudioContext)

	return context
}

export default React.memo(AudioProvider)
