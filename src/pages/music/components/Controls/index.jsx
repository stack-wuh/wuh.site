import React, { Fragment } from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'
import styles from 'styles/controls.module.scss'

const Controls = ({ isPlayed, onPlay, onPause }) => {
    return (<Fragment>
        <div className={styles.controls}>
            <button className={classnames(styles.controls__prev, 'iconfont')}>&#xe626;</button>
            {
                isPlayed ? 
                    (<button onClick={onPause} className={classnames(styles.controls__play, 'iconfont')}>&#xe601;</button>) :
                    (<button onClick={onPlay} className={classnames(styles.controls__play, 'iconfont')}>&#xe642;</button>)
            }
            <button className={classnames(styles.controls__next, 'iconfont')}>&#xe60a;</button>
        </div>
    </Fragment>)
}

Controls.propTypes = {
    isPlayed: propTypes.bool.isRequired,
    onNext: propTypes.func.isRequired,
    onPrev: propTypes.func.isRequired,
    onPlay: propTypes.func.isRequired,
    onPause: propTypes.func.isRequired
}

Controls.defaultProps = {
    isPlayed: false,
    onNext: () => {},
    onPrev: () => {},
    onPlay: () => {},
    onPause: () => {}
}

export default Controls