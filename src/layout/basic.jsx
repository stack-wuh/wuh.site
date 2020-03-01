import React from 'react'
import { withRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import styles from 'styles/layout.module.scss'
import Slide from './slide'

function BasicLayout ({route}) {
    return (<>
        <div className={styles.layout_wrap}>
            <div className={styles.layout_outer}>
                <div className={styles.layout_outer__slide}>
                    <Slide></Slide>
                </div>
                <div className={styles.layout_outer__main}>
                    {renderRoutes(route.routes)}
                </div>
            </div>
        </div>
    </>)
}

export default withRouter(BasicLayout)