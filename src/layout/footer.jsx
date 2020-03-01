import React from 'react'
import styles from 'styles/footer.module.scss'

function Footer () {
    return (<>
        <div className={styles.footer_wrap}>
            <div className={styles.footer_wrap__outer}>
                <strong className={styles.footer_wrap__text}>鄂ICP备20001814</strong>
                <span className={styles.footer_wrap__copy}>©copyright 2020 WUHONG, Inc.</span>
                <strong className={styles.footer_wrap__text}>你也想起舞吗</strong>
            </div>
        </div>
    </>)
}

export default Footer