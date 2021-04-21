/**
 * 保证全局生成一个Audio对象
 * 在切换路由时，防止对象丢失
 * **/
const createAudio = (function () {
  var instance = null
  var audio = function () {
    if (instance) return instance
    
    return instance = new Audio()
  }
  return audio
})()


export default createAudio