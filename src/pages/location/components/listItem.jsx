import React from 'react'
import classnames from 'classnames'
import styles from 'styles/location.module.scss'

function listItem ({ type, children, desc }) {
    return (<>
        <div className={styles.item_outer_wrap}>
            <span className={classnames('iconfont', styles.outer_icon)} 
                dangerouslySetInnerHTML={{__html: type}}>
            </span>
            <div className={styles.inner_wrap}>
                {desc}
            </div>
        </div>
    </>)
}

export default listItem