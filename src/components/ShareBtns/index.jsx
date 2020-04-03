import React from 'react'
import styles from 'styles/share-btns.module.scss'
import classnames from 'classnames'
import share from 'utils/share'
import copy from 'utils/copy'

const shareTo = ({ label }, payload) => {
    switch (label) {
        case 'qqzone': return share.toQzone(payload.qqzone.url)
        case 'wechat': return share.toWechat()
        case 'link': return (() => {
            let url = new URL(window.location.href)
            copy({ value: url })
        })()
        default: return {}
    }
}
const ShareBtns = ({list, payload}) => {
    return (<React.Fragment>
        <div className={styles.share}>
            <ul className={styles.share__list}>
                {
                    list.map(v => (<li
                         key={v.label} 
                         className={classnames('iconfont', styles.share__list_item)}
                         dangerouslySetInnerHTML={{
                             __html: v.icon
                         }}
                         onClick={() => shareTo(v, payload)}>
                    </li>))
                }
            </ul>
        </div>
    </React.Fragment>)
}

ShareBtns.defaultProps = {
    list: [
        {
            label: 'qqzone',
            icon: '&#xe61f;'
        },
        {
            label: 'wechat',
            icon: '&#xe694;'
        },
        {
            label: 'twitter',
            icon: '&#xe6c7;'
        },
        {
            label: 'link',
            icon: '&#xe621;'
        }
    ]
}

export default ShareBtns