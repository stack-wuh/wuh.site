const clipboard = function ({ value, isSelect = false }) {
    let el = document.createElement('input')
    if (!isSelect) {
        el.setAttribute('value', value)
        document.body.appendChild(el)
        el.select()
        window.getSelection().toString()
        document.execCommand('copy')
        document.body.removeChild(el)
    }
}

export default clipboard