import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styles/slide.module.scss'
import classnames from 'classnames'
import { useFetch } from '../hooks'
import { slideMenus } from '../api/map'
import PageLoading from '../components/PageLoading'
import { withRouter } from 'react-router'

const renderMenuItem = ({ label, icon, path }, history) => {
    return (<Link key={label} to={{pathname: `/${path}`}}>
        <li className={classnames([styles.slide_wrap__item], 'fade_in_background_transition')} key={label}>
            <i className={classnames('iconfont', 'my-icon__normal')}
                dangerouslySetInnerHTML={{__html: icon}}></i>
            <span className={styles.slide_wrap__item__text}>{label}</span>
        </li>
    </Link>)
}

function Slide ({ className }) {
    const {data, isLoading} = useFetch(slideMenus)
    return (<>
        <div className={classnames(styles.slide_wrap, className)}>
            <ul className={styles.slide_wrap__list}>
                {
                    isLoading ? 
                        (<PageLoading />) :
                        (Array.isArray(data.data) && data.data.map(renderMenuItem))
                }
            </ul>
        </div>
    </>)
}

export default withRouter(Slide)