import React from 'react'
import styles from 'styles/slide.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'redux/action/slide'

const renderMenuItem = ({ label, icon, path }, history) => {
    return (<Link key={label} to={{pathname: `/${path}`}}>
        <li className={classnames([styles.slide_wrap__item], 'fade_in_background_transition')} key={label}>
            <i className={classnames('iconfont', 'my-icon__normal')}
                dangerouslySetInnerHTML={{__html: icon}}></i>
            <span className={styles.slide_wrap__item__text}>{label}</span>
        </li>
    </Link>)
}

const SlideM = ({menus, dispatch}) => {
    return (<React.Fragment>
        <div className={classnames(styles.slide_m)}>
            <ul className={styles.slide_wrap__list} onClick={() => dispatch({ type: 'SLIDE_CHANGE' })}>
                {
                    (Array.isArray(menus) && menus.map(renderMenuItem))
                }
            </ul>
        </div>
    </React.Fragment>)
}

const mapStateToProps = state => ({menus: state.SLIDE.fetcher.data})
const mapDispatchToProps = dispatch => ({ dispatch, ...actions })

export default connect(mapStateToProps, mapDispatchToProps)(SlideM)