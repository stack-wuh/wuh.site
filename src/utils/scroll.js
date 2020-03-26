/**
 * 
 * @param {*} param direction 方向 true-->down, false -- > up 
 */
let globalId
const scrollTo = ({ direction = true } = {}, cb) => {
    const el = document.querySelector('.App')
    const step = Math.floor(el.scrollTop/8)
    if (el.scrollTop > 0) {
        el.scrollTop = el.scrollTop - step
    }

    globalId = window.requestAnimationFrame(scrollTo)
    return cb && cb(globalId)
}

export default scrollTo
export {
    scrollTo
}