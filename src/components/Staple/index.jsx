import React from 'react'
import styles from 'styles/staple.module.scss'
import classnames from 'classnames'
import clipboard from 'utils/copy'
import share, { handler } from 'utils/share'

const openHref = props => {
    if (!props.target_url) return
    if (props.label === 'link') {
        return clipboard({value: props.target_url})
    } else if (props.label === 'qqQzone') {
        console.log('is clicked')
        return share.toQzone()
    } else if (props.label === 'up') {
        return handler.onScrollTop(props)
    } else if (props.label === 'down') {
        return handler.onScrollDownPage(props)
    } else if (props.label === 'email') {
        return share.toEmail()
    }
    const url = new URL(props.target_url)
    window.open(url)
}

const Staple = ({ list, direction, className, onMouseLeave, onMouseEnter, onClick, children }) => {
    const stapleStyle = {
        flexDirection: direction
    }
    return (<React.Fragment>
        <div className={classnames(styles.staple, className)} style={stapleStyle}>
            {
                list.map(v => 
                    (<span
                        data-icon={v.label}
                        onMouseEnter={() => onMouseEnter(v)}
                        onMouseLeave={() => onMouseLeave(v)}
                        onClick={() => onClick(v)}
                        key={v.label} 
                        className={classnames('iconfont', styles.staple__icon)}
                        dangerouslySetInnerHTML={{__html: v.icon}}>
                    </span>))
            }
            {children}
        </div>
    </React.Fragment>)
}

Staple.defaultProps = {
    list: [
        {
            label: 'wechat',
            icon: '&#xe694;',
            target_url: 'https://src.wuh.site/img/wechat.jpeg'
        },
        {
            label: 'qq',
            icon: '&#xe76f;',
            target_url: 'https://src.wuh.site/img/qq.jpeg'
        },
        {
            label: 'qqQzone',
            icon: '&#xe61f;',
            target_url: 'undefined'
        },
        {
            label: 'github',
            icon: '&#xe600;',
            target_url: 'https://github.com/stack-wuh'
        },
        {
            label: 'bilibili',
            icon: '&#xe625;',
            target_url: 'https://space.bilibili.com/18414227'
        },
        {
            label: 'zhihu',
            icon: '&#xe636;',
            target_url: 'https://www.zhihu.com/people/mei-you-chuan-de-hai-zei-wang'
        },
        {
            label: 'twitter',
            icon: '&#xe6c7;',
            target_url: 'https://twitter.com/wuh131420'
        },
        {
            label: 'link',
            icon: '&#xe621;',
            target_url: 'https://wuh.site/location'
        }
    ],
    direction: 'column',
    className: '',
    onMouseLeave: (v) => handler.onMouseLeave(v),
    onMouseEnter: (v) => handler.onMouseEnter(v),
    onClick: (v) => openHref(v)
}

export default Staple