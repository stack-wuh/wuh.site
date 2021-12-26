import React from 'react'
import Space from '@/components/space/space'
import Button from '@/components/button/button'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import swr from 'swr'
import { API_PLAY_LIST } from '@/constant/api'
import fetcher from '@/lib/fetch'
import { ITraceItem } from '@/components/audio/useAudio'

import useAudio from './useAudio'

const config = {
	revalidateOnMount: true,
	revalidateOnFocus: false,
	focusThrottleInterval: 1000 * 50,
}

const useMusicData = (): { playlist: ITraceItem[] } => {
	const { data } = swr(API_PLAY_LIST, fetcher, config)

	if (!data) return { playlist: [] }

	return {
		playlist: data.data.rows,
	}
}

const AudioControl = () => {
	const data = useMusicData()
	const [state, actions] = useAudio({ traceList: data.playlist })
	const { initialTrace } = state

	return (
		<div className="ww_audio">
			<div className="ww_audio__head">
				<span>
					{initialTrace?.name} - {initialTrace?.by}
				</span>
			</div>
			<Space size="small" className="ww_audio__space">
				{/* 上一曲 */}
				<Button onClick={actions.onPrev} size="small" ghost icon="icon-prev1" />

				{/* 播放状态 */}
				<SwitchTransition mode="out-in">
					<CSSTransition
						key={state.playStatus}
						classNames="fade"
						timeout={350}
						unmountOnExit>
						{state.isplaying ? (
							<Button
								disabled={!state.canplay}
								onClick={actions.onPause}
								ghost
								size="small"
								icon="icon-pause"
							/>
						) : (
							<Button
								disabled={!state.canplay}
								ghost
								onClick={actions.onPlay}
								size="small"
								icon="icon-play1"
							/>
						)}
					</CSSTransition>
				</SwitchTransition>

				{/* 静音状态 */}
				<SwitchTransition mode="out-in">
					<CSSTransition
						in={state.muted}
						key={state.mutedStatus}
						classNames="fade"
						timeout={350}
						unmountOnExit>
						{state.muted ? (
							<Button
								onClick={() => actions.onToggleMuted(false)}
								ghost
								size="small"
								icon="icon-volume-x"
							/>
						) : (
							<Button
								onClick={() => actions.onToggleMuted(true)}
								ghost
								size="small"
								icon="icon-volume-"
							/>
						)}
					</CSSTransition>
				</SwitchTransition>

				{/* 下一曲 */}
				<Button onClick={actions.onNext} ghost size="small" icon="icon-next" />
			</Space>
		</div>
	)
}

export default React.memo(AudioControl)
