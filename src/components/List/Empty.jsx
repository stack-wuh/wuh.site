import React, { Fragment } from 'react'
import styles from 'styles/list.module.scss'

const ListItemEmpty = () => {
    return (<Fragment>
        <div className={styles.empty_wrap}>
            <strong className={styles.empty_wrap__title}>空空如也</strong>
        </div>
    </Fragment>)
}

export default ListItemEmpty