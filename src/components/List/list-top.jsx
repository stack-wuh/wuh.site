import React, { Fragment } from 'react'
import classnames from 'classnames'
import styles from 'styles/slideR.module.scss'

const ListTop = ({ className, title }) => {
    return (<Fragment>
        <div className={classnames(styles.list_wrapper, className)}>
            <h4 className={styles.list_wrapper__title}>{title}</h4>
            <ul className={styles.list_wrapper__list}>
                <li data-hover='pointer' className={styles.list_wrapper__item}> 123aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
                <li className={styles.list_wrapper__item}> 123</li>
                <li className={styles.list_wrapper__item}> 123</li>
            </ul>
        </div>
    </Fragment>)
}

ListTop.defaultProps = {
    className: '',
    title: ' Feat && Find'
}

export default ListTop