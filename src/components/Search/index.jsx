import React, { Fragment } from 'react'
import classnames from 'classnames'
import styles from 'styles/slideR.module.scss'

const Search = ({ className, onSearch }) => {
    return (<Fragment>
        <div className={classnames(styles.search, className)}>
            <div className={styles.search__outer}>
                <input placeholder='search && find ...' type="text" className={styles.search__input} />
                <span
                    onClick={() => onSearch()}
                    data-hover='pointer' 
                    className={classnames('iconfont', styles.search__search)}>&#xe7b5;
                </span>
            </div>
        </div>
    </Fragment>)
}

export default Search