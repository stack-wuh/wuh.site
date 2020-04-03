import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styles/header.module.scss'
import Logo from '../../assets/image/logo.png'
import classnames from 'classnames'
import { connect } from 'react-redux'
import * as actions from 'redux/action/slide'

function Header ({ dispatch }) {
    return (<>
        <div className={styles.header_wrap}>
            <div className={styles.header_wrap__outer}>
                <div className={styles.outer__left}>
                    <Link to={{pathname: '/'}}>
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div onClick={() => dispatch({type: 'SLIDE_CHANGE'})} className={classnames(styles.outer__left__menu, 'iconfont')}>&#xe6f3;</div>
                <div className={styles.outer__right}>
                    <span>我是一个过客，而不是归人</span>
                    {/* <Link to={{pathname: '/'}}>我是一个过客，而不是归人</Link> */}
                </div>
            </div>
        </div>
    </>)
}

const mapStateToProps = (state) => ({ slide: state.SLIDE })
const mapDispatchToProps = (dispatch) => ({ ...actions, dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Header)