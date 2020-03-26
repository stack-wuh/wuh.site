const share = {
    // 分享至qq空间
    toQzone: function () {
        const url = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + 
                    'url=https://wuh.site/&title=山河入梦来 | WUH.SITE | 你一定也想起舞吧&' + 
                    'sharesource=qzone&' +
                    'pics=https://src.wuh.site/img/share1.jpg&' +
                    'summary=见贤思齐焉, 见不贤而内自省也&' + 
                    'site=https://wuh.site/' + 
                    'site=https://baidu.com'
        return window.open(url)
    },
    //分享到朋友圈
    toWechat: function () {
        const { wx } = window
    },
    toSina: function () {},
}

let scrollId
const handler = {
    state: {
        count: 0,
        canMoving: true
    },
    setStore: function (data) {
        handler.state = {
            ...handler.state,
            ...data
        }
    },
    onMouseEnter: function (data) {
        if (!handler.state.canMoving) return
        const el = document.querySelector('.App')
        // const scrollTop = el.scrollHeight - el.scrollTop
        const { label } = data
        if (label === 'up') {
            if (el.scrollTop > 0) {
                el.scrollTo({
                    // top: el.scrollTop - Math.round(scrollTop/8), 
                    top: el.scrollTop - 2,
                    behavior: "smooth" 
                })
            }
        } else if (label === 'down') {
            if (el.scrollTop < el.scrollHeight) {
                el.scrollTo({
                    // top: el.scrollTop + Math.round(scrollTop/8),
                    top: el.scrollTop + 2,
                    behavior: 'smooth'
                })
            }
        }
        scrollId = window.requestAnimationFrame(() => handler.onMouseEnter(data))
    },
    onMouseLeave: function (data) {
        window.cancelAnimationFrame(scrollId)
    },
    onScrollTop: function () {
        handler.setStore({canMoving: false})
        if (handler.state.canMoving) return
        let el = document.querySelector('.App')
        el.scrollTo({ top: 0, behavior: 'smooth'})
        setTimeout(() => handler.setStore({ count: 0, canMoving: true }), 200)

    },
    onScrollDownPage: function (data) {
        handler.setStore({canMoving: false})
        if (handler.state.canMoving) return
        const innerHeight = window.innerHeight
        const el = document.querySelector('.App')
        handler.state.count ++ 
        el.scrollTo({
            top: handler.state.count * innerHeight,
            behavior: 'smooth'
        })
        setTimeout(() => {
            handler.setStore({ canMoving: true })
            handler.onMouseEnter(data)
        }, 500)
    }
}

const func_list = [
    {
        label: 'up',
        icon: '&#xe7eb;',
        target_url: 'undefined'
    },
    {
        label: 'down',
        icon: '&#xe7ec;',
        target_url: 'undefined'
    }
]

export {
    share,
    handler,
    func_list
}

export default share