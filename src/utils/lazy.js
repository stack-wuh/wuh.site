const lazy = () => {
    const elem = document.querySelector('.App')

    const getNodes = () => elem.querySelectorAll('[data-src]')

    if (![...getNodes()].length) {
        elem.removeEventListener('scroll', lazy, true)
        return
    }

    const isInViewPort = rect => {
        let viewHeight = document.documentElement.clientHeight ||
                            document.clientHeight ||
                            window.innerHeight
        return rect.top < viewHeight
    }

    const filterInView = node => {
        let nodeRect = node.getBoundingClientRect()
        return isInViewPort(nodeRect)
    }

    const getInViewNodes = (nodes=[]) => nodes.filter(filterInView)

    let inNodes = getInViewNodes([...getNodes()])

    const nodeReplaceSrc = nodes => nodes.forEach(node => {
        const target_src = node.getAttribute('data-src')
        node.src = target_src
        setTimeout(() => { node.removeAttribute('data-src') }, 100)
    })

    nodeReplaceSrc(inNodes)
    elem.addEventListener('scroll', lazy, true)
}

export default lazy