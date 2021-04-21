import { atom, selector } from 'recoil'

/***
 * @param { isMuted } boolean 是否静音
 * @param { volume } number 音量, 保持为整数(0-100)
 * @param { allowLoop } boolean 是否循环播放
 * @param { audio } HTMLAudioElement 播放器原型
 * @param { allowReady } boolean 播放器是否以准备就绪, 可以播放
 * @param { src } string 播放音乐地址
 * @param { isPlaying } boolean 当前状态是否在播放
 * @param { status } string 当前状态值映射
 * @param { process } number 播放进度 (0-100)
 * @param { autoplay } boolean 是否开启自动播放
 * @param { allowControls } boolean 允许展示Controls控制器
 * @param { currentTime } number 当前播放器的播放时间, 单位为ms
 */
const DEFAULT_AUDIO = {
  isMuted: false,
  volume: 30,
  allowLoop: false,
  audio: null,
  allowReady: false,
  src: null,
  isPlaying: false,
  status: '待加载',
  process: 0,
  autoplay: false,
  allowControls: false,
  currentTime: 0
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