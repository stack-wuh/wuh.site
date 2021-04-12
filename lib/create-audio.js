const createAudio = (function () {
  var instance = null
  var audio = function () {
    if (instance) return instance
    
    return instance = new Audio()
  }
  return audio
})()


export default createAudio