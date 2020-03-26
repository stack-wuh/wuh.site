import React from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import styles from 'styles/layout.module.scss'
import staple from 'styles/staple.module.scss'
import Slide from './slide'
import Staple from 'components/Staple'
import { func_list } from 'utils/share'

function BasicLayout ({route}) {
    return (<>
        <div id='main' className={styles.layout_wrap}>
            <Staple className={styles.layout_wrap__staple} />
            <Staple list={func_list} className={styles.layout_wrap__func}>
                <span>
                    <a href="mailto:wuh131420@foxmail.com" 
                        title='contack' 
                        className={classnames('iconfont', staple.staple__icon)}
                        dangerouslySetInnerHTML={{__html: '&#xe62e;'}}>
                    </a>
                </span>
            </Staple>
            <div className={styles.layout_outer}>
                <div className={styles.layout_outer__slide}>
                    <Slide></Slide>
                </div>
                <div className={styles.layout_outer__main}>
                    {renderRoutes(route.routes)}
                </div>
                <div className={styles.layout_outer__slide}></div>
            </div>
        </div>
    </>)
}

export default withRouter(BasicLayout)