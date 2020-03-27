import React, { Fragment } from 'react'
import classnames from 'classnames'
import styles from 'styles/slideR.module.scss'
import Search from 'components/Search'
import { ListTop } from 'components/List'

const SlideR = ({ className }) => {
    const handleSearch =  () => {}

    return (<Fragment>
        <div className={classnames(styles.slide_r, className)}>
            <div className=''>
                <Search onClick={v => handleSearch(v)}></Search>
                <ListTop></ListTop>
            </div>
        </div>
    </Fragment>)
}

SlideR.defaultProps = {
    className: ''
}

export default SlideR