import React, { Fragment, useEffect, useRef } from 'react'
import styles from '../../styles/controls.module.scss'

const Circle = ({value}) => {
    const cirRef = useRef(null)
    useEffect(() => {
    }, [value])
    return (<Fragment>
        <div ref={cirRef} className={styles.circle}>
        </div>
    </Fragment>)
}

export default Circle