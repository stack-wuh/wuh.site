import React, { Fragment} from 'react'
import styles from '../../styles/pageloading.module.scss'

const PageLoading = () => {
    return (<Fragment>
        <div className={styles.pageloading}>
            <div className={styles.pageloading__loader}></div>
            <div className={styles.pageloading__loader}></div>
            <div className={styles.pageloading__loader}></div>
            <div className={styles.pageloading__loader}></div>
            <div className={styles.pageloading__loader}></div>
        </div>
    </Fragment>)
}

export default PageLoading