import React, { Fragment } from 'react'
import styles from 'styles/dialog.module.scss'

const Dialog = ({children, onClick}) => {
    return (<Fragment>
        <div className={styles.dialog}>
            <div onClick={() => onClick()} className={styles.dialog__outer}></div>
            {children}
        </div>
    </Fragment>)
}

export default Dialog