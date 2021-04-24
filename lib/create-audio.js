const AUDIO_STATUS_MAPS = {
  0: '待加载',
  1: '不可以完全播放', // oncanplay -- 浏览器检测可以部分播放
  2: '可以完全播放', // oncanplaythrough -- 浏览器检测可以全部播放至结束
}

/***
 * @param { isMuted } boolean 是否静音
 * @param { volume } number 音量, 保持为整数(0-100)
 * @param { allowLoop } boolean 是否循环播放
 * @param { audio } HTMLAudioElement 播放器原型
 * @param { allowReady } boolean 播放器是否以准备就绪, 可以播放
 * @param { src } string 播放音乐地址
 * @param { isPlaying } boolean 当前状态是否在播放
 * @param { status } string 当前状态值映射
 * @param { statusText } string 状态状态值映射说明
 * @param { process } number 播放进度 (0-100)
 * @param { autoplay } boolean 是否开启自动播放
 * @param { allowControls } boolean 允许展示Controls控制器
 * @param { currentTime } number 当前播放器的播放时间, 单位 毫秒(ms)
 * @param { duration } number 资源总时长, 单位秒(s)
 * @param { step } number 音量的步进器
 * @param { direction } number 音量步进器的方向
 */
 const DEFAULT_AUDIO = {
  isMuted: false,
  volume: 30,
  allowLoop: false,
  audio: null,
  allowReady: false,
  src: null,
  isPlaying: false,
  status: 0,
  statusText: '待加载',
  process: 0,
  autoplay: false,
  allowControls: false,
  currentTime: 0,
  duration: 0,
  step: 10,
  direction: 1
}

export { DEFAULT_AUDIO }

class CreateAudio {
  constructor (props) {
    this._instance = null
    
    Object.assign(this, DEFAULT_AUDIO, props)

    this.initialPlayer(new Audio(), this)
          .getStatus()
  }

  /**
   * 初始化一个Audio播放器对象
   * @param { audio } HTMLAudioElement
   * @param { options } Object Audio播放器的一些属性
   */
  initialPlayer (audio, options) {
    const { src, muted, allowLoop, volume } = options
    const instance = audio || {}

    instance.src = src
    instance.muted = muted
    instance.loop = allowLoop
    instance.volume = this.getVolume(volume)

    this._instance = instance
    this.audio = instance
    
    return this
  }

  /**
   * 将整数转换为audio对象需要的小数 90 --> 0.9
   * @param { value } number 
   */
  getVolume (value) {
    const volume = Number(Number(value/100).toFixed(2))

    return volume
  }

  set (key, value) {
    this[key] = value
    
    return this
  }

  get (key) {
    return this[key]
  }
  /**
   * 检查播放器拉取资源后，是否可以更新为播放状态
   */
  getStatus () {
    console.group('================== getStatus =================')
    this._instance.addEventListener('canplay', () => {
      this.setStatus(1)
    })
    this._instance.addEventListener('canplaythrough', () => {
      this.setStatus(2)
    })
    this._instance.addEventListener('durationchange', (e) => {
      this.duration = e.timeStamp*1000
      console.group('================== DurationChange =================')
      console.log('duration time', e.timeStamp)
      console.groupEnd()
    })
    console.groupEnd()
  }

  /**
   * 设置Status部分的状态值更新
   * **/
  setStatus (value) {
    const value_maps = {
      0: {
        statusText: AUDIO_STATUS_MAPS[0],
        status: 0,
        allowReady: false
      },
      1: {
        statusText: AUDIO_STATUS_MAPS[1],
        status: 1,
        allowReady: true
      },
      2: {
        statusText: AUDIO_STATUS_MAPS[2],
        status: 2,
        allowReady: true
      }
    }
    Object.assign(this, value_maps[value])
  }

  /**
   * 播放
   * @returns 
   */
  onPlay () {
    this.isPlaying = true
    this._instance.play()
    this.getProcess()

    return this
  }

  /**
   * 暂停
   * @returns 
   */
  onPause () {
    this.isPlaying = false
    this._instance.pause()
    return this
  }

  /**
   * 获取audio的播放进度条
   * @returns 
   */
  getProcess () {
    this._instance.addEventListener('timeupdate', (e) => {
      const process = Number((e.timeStamp / this.duration * 100).toFixed(2))
      this.process = process
    })

    return this
  }

  /**
   * 切换audio是否开启静音
   * @returns 
   */
  onToggleMuted () {
    console.log('is clicked muted')
    this._instance.muted = !this.isMuted
    this.isMuted = !this.isMuted
    return this
  }

  onToggleVolume (value, direction = 1) {
    this.volume = this.volume + value * direction
    this._instance.volume = this.getVolume(this.volume)
  }

  onIncreateVolume (value) {
    this.onToggleVolume(value ?? this.step)
  }

  onDecreateVolume (value) {
    this.onToggleVolume(value ?? this.step, -1)
  }
}

export default CreateAudio