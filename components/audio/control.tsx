import React from 'react'
import Space from '@/components/space/space'
import Button from '@/components/button/button'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import useAudio from './useAudio'

const src = 'http://m7.music.1262.net/20211113114736/51d0d17be6d1e42eacdea143a9933dfa/ymusic/95ae/ae37/59cf/f1152389f534be626c213bd622dae6c8.mp3'

const AudioControl = () => {
  const [state, actions] = useAudio()

  return <div className="ww_audio">
    <div className="ww_audio__head">
      <span>song - name</span>
    </div>
    <Space size='small' className='ww_audio__space'>
      {/* 上一曲 */}
      <Button onClick={actions.onPrev} size='small' ghost icon='icon-prev1' />

      {/* 播放状态 */}
      <SwitchTransition mode='out-in'>
        <CSSTransition key={state.playStatus} classNames='fade' timeout={350} unmountOnExit>
          {
            state.isplaying ? <Button disabled={!state.canplay} onClick={actions.onPause} ghost size='small' icon='icon-pause' />
              : <Button disabled={!state.canplay} ghost onClick={actions.onPlay} size='small' icon='icon-play1' />
          }
        </CSSTransition>
      </SwitchTransition>

      {/* 静音状态 */}
      <SwitchTransition mode='out-in'>
        <CSSTransition in={state.muted} key={state.mutedStatus} classNames='fade' timeout={350} unmountOnExit>
          {
            state.muted ? <Button onClick={() => actions.onToggleMuted(false)} ghost size='small' icon='icon-volume-x' />
              : <Button onClick={() => actions.onToggleMuted(true)} ghost size='small' icon='icon-volume-' />
          }
        </CSSTransition>
      </SwitchTransition>

      {/* 下一曲 */}
      <Button onClick={actions.onNext} ghost size='small' icon='icon-next' />
    </Space>
  </div>
}

export default React.memo(AudioControl)