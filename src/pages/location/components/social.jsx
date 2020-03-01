import React from 'react'
import styles from 'styles/location.module.scss'
import classnames from 'classnames'

const menuMaps = [
    {
        icon: '&#xe600;',
        link: 'https://github.com/stack-wuh?tab=repositories'
    },
    {
        icon: '&#xe636;',
        link: 'https://www.zhihu.com/people/mei-you-chuan-de-hai-zei-wang/activities'
    },
    {
        icon: '&#xe9eb;',
        link: ''
    },
    {
        icon: '&#xe625;',
        link: ''
    },
    {
        icon: '&#xe607;',
        link: ''
    }
]

function Social () {
    return (<>
        <div className={styles.social_wrap}>
            {
                menuMaps.map((v, i) => (<span
                        key={i} 
                        className={classnames('iconfont', styles.icon)}
                        dangerouslySetInnerHTML={{__html: v.icon}}>
                    </span>))
            }
            {/* <Link className={styles.icon} to={{pathname: '/index'}}><span className={classnames('iconfont', styles.icon)}>&#xe600;</span></Link>
            <Link className={styles.icon} to={{pathname: '/index'}}><span className={classnames('iconfont', styles.icon)}>&#xe636;</span></Link>
            <Link className={styles.icon} to={{pathname: '/index'}}><span className={classnames('iconfont', styles.icon)}>&#xe9eb;</span></Link>
            <Link className={styles.icon} to={{pathname: '/index'}}><span className={classnames('iconfont', styles.icon)}>&#xe625;</span></Link>
            <Link className={styles.icon} to={{pathname: '/index'}}><span className={classnames('iconfont', styles.icon)}>&#xe607;</span></Link> */}
        </div>
    </>)
}

export default Social