import React, { useEffect } from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import styles from 'styles/layout.module.scss'
import staple from 'styles/staple.module.scss'
import Slide from './slide'
import SlideM from './slide.m'
// import SlideRight from './slideR'
import Staple from 'components/Staple'
import { func_list } from 'utils/share'
import Dialog from 'components/Dialog'
import { connect } from 'react-redux'
import * as actions from 'redux/action/slide'

function BasicLayout ({ route, history, slide, dispatch, fetchSlideList }) {
    const { toggleDialog } = slide
    // 是否展示功能组件
    const reg = /\/?blog/gi
    const isShowFuncBtn = reg.test(history.location.pathname)

    useEffect(() => {
        dispatch(fetchSlideList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        <div id='main' className={styles.layout_wrap}>
            <Staple className={styles.layout_wrap__staple} />
            {
                isShowFuncBtn &&
                (<Staple list={func_list} className={styles.layout_wrap__func}>
                    <span>
                        <a href="mailto:wuh131420@foxmail.com" 
                            title='contack' 
                            className={classnames('iconfont', staple.staple__icon)}
                            dangerouslySetInnerHTML={{__html: '&#xe62e;'}}>
                        </a>
                    </span>
                </Staple>)
            }
            {
                toggleDialog.isShowDialog &&
                <Dialog onClick={() => dispatch({type: 'SLIDE_CHANGE'})}>
                    <SlideM />
                </Dialog>
            }
            <div className={styles.layout_outer}>
                <div className={styles.layout_outer__slide}>
                    <Slide className={styles.layout_outer__slide_inner}></Slide>
                </div>
                <div className={styles.layout_outer__main}>
                    {renderRoutes(route.routes)}
                </div>
                {/* <div className={styles.layout_outer__slide}>
                    <SlideRight></SlideRight>
                </div> */}
            </div>
        </div>
    </>)
}

const mapStateToProps = state => ({slide: state.SLIDE})
const mapDispatchToProps = dispatch => ({ dispatch, ...actions })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicLayout))