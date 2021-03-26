const player = () => {
  const audio = new Audio()
  audio.src = 'https://src.wuh.site/media/renjianbuzhide.mp3'
  audio.autoplay = false
  audio.volume = 0.3
  

  console.log('audio', audio)
  console.log('audio.src', audio.src)

  audio.addEventListener('canplaythrough', e => {
    console.log('canplaythrough')
  })

  audio.addEventListener('abort', () => {
    console.log('audio has abord')
  })

  audio.addEventListener('durationchange', e => {
    console.log('current is durationchange', e)
  })

  audio.addEventListener('ended', () => {
    console.log('has ended')
  })

  audio.addEventListener('volumechange', e => {
    console.log('volumechange', e)
  })

  audio.addEventListener('error', e => {
    console.log(e)
  })

  audio.addEventListener('playing', () => {
    console.log('start play')
  })

  audio.addEventListener('timeupdate', e => {
    console.log('duration process', audio.currentTime/audio.duration*100)
  })

  const step = 0.1
  const setVolume = () => {
    audio.volume += step
  }

  audio.setVolume = setVolume

  return audio
}

export default player