/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useRef, useEffect } from 'react'
import classnames from 'classnames'
const defaultImage = 'https://src.wuh.site/img/cover.jpeg'

const LazyImage = ({ className, ...props }) => {
    const imgRef = useRef(null)

    useEffect(() => {
        imgRef.current.onerror = function (err) {
            imgRef.current.src = defaultImage
        }
    }, [])

    return (<Fragment>
        <img
            ref={imgRef}
            className={classnames(className)}
            data-src={props['data-src']}
            src={defaultImage}
            alt='lazy-image'/>
    </Fragment>)
}

LazyImage.defaultProps = {
    'data-src': ''
}

export default LazyImage