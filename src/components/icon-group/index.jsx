import React from 'react'
import styles from 'styles/icon-group.module.scss'

function IconGroup ({data}) {
    const { update_at, look, location } = data
    return (<>
        <div className={styles.icon_group_wrap}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <i className="iconfont">&#xe74c;</i>
                    <time>{update_at.substr(0, 10).replace(/-/ig,'/')}</time>
                </li>
                {  
                    location &&  (<li className={styles.item}>
                        <i className="iconfont">&#xe758;</i>
                        <span>{location}</span>
                    </li>)
                }
                {
                    look && (<li className={styles.item}>
                        <i className="iconfont">&#xe755;</i>
                        <span>{look}</span>
                    </li>)
                }
            </ul>
        </div>
    </>)
}

export default IconGroup