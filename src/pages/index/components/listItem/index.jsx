import React from 'react'
import { withRouter } from 'react-router'
import styles from 'styles/list.module.scss'
import defaultImage from 'assets/image/bg_default_empty.jpeg'
import IconGroup from 'components/icon-group'

function listItem ({data, history, ...args}) {
    const { title, sub_title, ...props } = data

    const handleGoDetail = () => {
        const { _id } = props
        history.push({
            pathname: `/blog/detail/${_id}`
        })
    }

    return (<>
        <div className={styles.list_wrap}>
            <div className={styles.list_wrap__outer}>
                <div 
                    className={styles.list_wrap__outer__lf} 
                    style={{backgroundImage: `url(${defaultImage})`}}>
                </div>
                <div 
                    className={styles.list_wrap__outer__rg}>
                        <p onClick={handleGoDetail} className={styles.pre__title}>{title}</p>
                        <p className={styles.pre__sub}>{sub_title}</p>
                        <IconGroup data={props}></IconGroup>
                </div>
            </div>
        </div>
    </>)
}

export default withRouter(listItem)