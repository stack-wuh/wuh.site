import React from 'react'
import { withRouter } from 'react-router'
import styles from 'styles/list.module.scss'
import IconGroup from 'components/icon-group'
import LazyImage from 'components/LazyImage'

function listItem ({data, history}) {
    const { title, sub_title, cover_img, ...props } = data

    const handleGoDetail = () => {
        const { _id } = props
        history.push({
            pathname: `/blog/detail/${_id}`
        })
    }

    return (<React.Fragment>
        <div data-box='list-wrap' className={styles.list_wrap}>
            <div className={styles.list_wrap__outer}>
                <div 
                    className={styles.list_wrap__outer__lf}>
                    <LazyImage data-src={cover_img} className={styles.list_wrap__outer__lf_img} />
                </div>
                <div 
                    className={styles.list_wrap__outer__rg}>
                        <p onClick={handleGoDetail} className={styles.pre__title}>{title}</p>
                        <p className={styles.pre__sub}>{sub_title}</p>
                        <IconGroup data={props}></IconGroup>
                </div>
            </div>
        </div>
    </React.Fragment>)
}

export default withRouter(listItem)