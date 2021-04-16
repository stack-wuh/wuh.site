import { atom, selector } from 'recoil'

const DEFAULT_AUDIO = {
  muted: false,
  volume: 0.5,
  loop: false,
  audio: null
}

export const audioState = atom({
  key: 'audioState',
  default: DEFAULT_AUDIO
})

export const setAudioAttr = selector({
  key: 'SET_AUDIO_ATTR',
  get ({ get, ...props }) {
    console.group('================== SET_AUDIO_ATTR =================')
    console.log('SET_AUDIO_ATTR', props)
    console.groupEnd()
    const audioState = get(audioState)
    return audioState
  }
})