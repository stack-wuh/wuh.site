(function () {
  let $target = null
  let index = 0
  const MIX_POSITION_VALUE = 40
  const labels = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善", "富强"]

  const getTarget = () => { $target = document.querySelector('body') }
  const createStyle = (x) => {
    const $head = document.querySelector('head')
    const style = document.createElement('style')
    style.innerHTML = '.ww_popupper{position:fixed;padding:8px;min-width:fit-content;border-radius:3px;background-color:#fff;color:#333; transition: background .3s ease;}@keyframes slide{0%{transform:translateX(' + x + '%) translateY(-100%) rotateX(0deg);opacity:1}20%{transform:' + 'translateX(' + x + '%)' + ' translateY(100%) rotateX(0deg);opacity:1}100%{transform:translateX(' + x + '%) translateY(-400%) rotateX(-80deg);opacity:0}}.ani_slide{animation:slide 1.6s linear forwards}'
    $head.append(style)
  }
  const getColor = () => {
    let r, g, b, a
    r = Math.random() * 255
    g = Math.random() * 255
    b = Math.random() * 255
    a = 1

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
  }
  const getClientRect = (event) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    let top = clientY
    let left = clientX
    let arrowRight = clientX < innerWidth / 2

    if (clientY < 70) {
      top = clientY + MIX_POSITION_VALUE
    }
    if (clientX < MIX_POSITION_VALUE) {
      left = clientX + MIX_POSITION_VALUE
    }

    if (clientY > innerHeight) {
      top = innerHeight - MIX_POSITION_VALUE
    }
    if (clientX > innerWidth - MIX_POSITION_VALUE) {
      left = innerWidth - MIX_POSITION_VALUE
    }

    const poverX = (clientX < MIX_POSITION_VALUE || arrowRight) ? 0.1 : -1
    const poverY = -1

    return { top, left, poverX, poverY }
  }
  const call = (event) => {
    const ele = document.createElement('div')
    ele.className = 'ww_popupper ani_slide'
    const posi = getClientRect(event)
    ele.style = 'position:fixed; top:' + posi.top + 'px;left:' + posi.left + 'px; transform: translateX(' + posi.poverX * 100 + '%) translateY(-100%);'
    ele.style.background = getColor()
    ele.style.color = getColor()
    const bubble = document.createElement('span')
    bubble.className = 'ww_bubble'
    bubble.append(labels[index % 12])
    index++
    createStyle(posi.poverX * 100)
    ele.append(bubble)
    ele.id = index
    $target.append(ele)

    setTimeout(() => {
      $target.removeChild(ele)
    }, 2000)
  }

  window.addEventListener('load', getTarget, false)
  window.addEventListener('click', call, false)
})()