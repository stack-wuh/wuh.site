import { atom, selector } from 'recoil'
import { DEFAULT_AUDIO } from '@/lib/create-audio'

export const A_AudioState = atom({
  key: 'audioState',
  default: DEFAULT_AUDIO
})

const getAudioVolume = value => Number((value/100).toFixed(2))
export const S_Audio_Volume = selector({
  key: 'S_Audio_Volume',
  get: ({ get }) => {
    const result = get(A_AudioState)
    result.volume = getAudioVolume(result.volume)

    return result
  }
})