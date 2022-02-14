import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMount, useUpdateEffect, useEventListener } from 'ahooks'
import { useAudioContext, ICustomAudioProps } from '.'
import { RootModel } from '@/redux/models'
import { TMusicProps } from '@/redux/models/music'

type TActionsProps = {
  onPlay: () => void
  onPause: () => void
  onTogglePlay: () => void
  onFetchPlayer: (p: { id: number }) => void
}

type TOptions = {
  allowFetchList?: boolean
  [k: string]: unknown
}

const options: TOptions = {
  allowFetchList: true,
}

const useControl = (ops?: TOptions): [ICustomAudioProps, TActionsProps] => {
  const initOps = { ...options, ops }
  const audioRef = useAudioContext()
  const dispatch = useDispatch()
  const store = useSelector((state: RootModel) => state.music)
  const { player, track } = store as unknown as TMusicProps

  useMount(() => {
    if (initOps.allowFetchList) {
      dispatch.music.loadMusicData()
    }
  })

  useUpdateEffect(() => {
    if (audioRef && player) {
      audioRef.src = player.url
      audioRef.ariaLabel = player.id
      if (track) {
        const _track = {
          ...track,
          audioStatus: 'pedding',
          canplay: false,
        }
        dispatch.music.putChangeTrack(_track)
      }
    }
  }, [player.url])

  useEventListener(
    'loadeddata',
    () => {
      if (track) {
        const _track = {
          ...track,
          audioStatus: 'pedding',
          canplay: false,
        }
        dispatch.music.putChangeTrack(_track)
      }
      console.log('第一帧加载完成')
    },
    { target: audioRef }
  )

  useEventListener(
    'canplaythrough',
    () => {
      if (track) {
        const _track = {
          ...track,
          audioStatus: 'ready',
          canplay: true,
        }
        dispatch.music.putChangeTrack(_track)
      }
      console.log('可以播放')
    },
    { target: audioRef }
  )

  useEventListener(
    'ended',
    () => {
      if (track) {
        const _track = {
          ...track,
          audioStatus: 'endding',
          canplay: true,
        }
        dispatch.music.putChangeTrack(_track)
      }
      console.log('播放结束了')
    },
    { target: audioRef }
  )

  useEventListener(
    'durationchange',
    () => {
      console.log('==== durationchange', audioRef)
      if (audioRef) {
        const { duration, currentTime } = audioRef
        actions.onProcessChange(duration, currentTime)
      }
    },
    { target: audioRef }
  )

  useEventListener(
    'timeupdate',
    () => {
      if (audioRef) {
        const { duration, currentTime } = audioRef
        actions.onProcessChange(duration, currentTime)
      }
    },
    { target: audioRef }
  )

  const actions = React.useMemo(
    () => ({
      onPlay() {
        audioRef.play()
      },
      onPause() {
        audioRef.pause()
      },
      onTogglePlay() {},
      onFetchPlayer(option: { id: number }) {
        dispatch.music.loadPlayerURL({ id: option.id })
      },
      onProcessChange(
        duration: number,
        currentTime: number
      ): { procent: number; duration: number; currentTime: number } {
        const procent = Math.floor((currentTime / duration) * 100)

        const progress = {
          procent,
          duration,
          currentTime,
        }

        dispatch.music.putChangeTrack(progress)

        return progress
      },
    }),
    []
  )

  return [audioRef, actions]
}

export default useControl
