export const defaultList = ['富强','民主','文明','和谐','团结','友爱','敬业','和谐','富强','民主','文明','和谐']
                            .map((v, _) => ({ text: v, _index: _ }))

export default class Pupop {
    constructor (props) {
        this.list = defaultList
        Object.assign(this, props);
        this.root = document.querySelector('body')
        this._index = -1
        this.addEmptyElem = this.addEmptyElem.bind(this)
        this.removeEmptyElem = this.removeEmptyElem.bind(this)
        this.randomRgbColor = this.randomRgbColor.bind(this)
        this.init = this.init.bind(this)
        this.elem = null
        this.elems = []

        this.createStyle(`
            @keyframes fade {
                from {
                    opacity: 1;
                    transform: translateX(0) translateY(0) rotateX(0deg);
                }
                to {
                    opacity: 0;
                    transform: translateX(20px) translateY(-80px) rotateX(90deg);
                }
            }
            .fade_js {
                animation: fade .8s .1s linear forwards;
            }

            .popup__nav {
                display: inline-block;
                padding: 4px 15px;
                font-size: 16px;
                text-align: center;
                border-radius: 4px;
            }
        `)
    }
    randomRgbColor () {
        let [r, g, b] = [
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 1
        ]
        return `rgba(${r}, ${g}, ${b}, ${1})`
    }
    createStyle (styles) {
        let elem = document.querySelector('#style_js')
        if (!elem) {
            elem = document.createElement('style')
            elem.type = 'text/css'
            elem.id = 'style_js'
            document.querySelector('head').appendChild(elem)
        }
        elem.appendChild(document.createTextNode(styles))
    }
    addEmptyElem ({ text, color, background }, pageX = 0, pageY = 0) {
        if (!text) return
        this.elem = document.createElement('div')
        const stylesMap = {
            position: 'absolute',
            left: pageX + 'px',
            top: pageY + 'px',
            userSelect: 'none',
            color: color || this.randomRgbColor().toString(),
            background: background || this.randomRgbColor().toString()
        }
        for(let k in stylesMap) {
            this.elem.style[k] = stylesMap[k]
        }
        this.elem.innerText = text
        this.elem.className = 'fade_js popup__nav'
        this.root.appendChild(this.elem)
        this.elems.push(this.elem)
        this.removeEmptyElem()
    }
    removeEmptyElem () {
        let timer = null
        if (timer) clearTimeout(timer)
        this.asyncForEach(this.elems, async c => {
            let el = await this.elems.shift()
            timer = setTimeout(() => {
                this.root.removeChild(el)
            }, 3000)
        })
    }
    init ({ pageX, pageY }) {
        Object.assign(this, {pageX, pageY})
        const { list } = this
        const maxLength = Array.isArray(list) ? list.length : 0
        this._index = (this._index === maxLength - 1) ? -1 : this._index
        this._index ++
        this.addEmptyElem(this.list[this._index], pageX, pageY)
    }
    async asyncForEach (array, cb) {
        for(let i = 0; i < array.length; i++) {
            await cb(array[i], i, array)
        }
    }
}
