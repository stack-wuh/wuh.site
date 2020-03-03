import React, { Fragment, useRef, useState, useEffect } from 'react'
import { useTitle } from '../../hooks'
import classnames from 'classnames'
import styles from '../../styles/music.module.scss'
import Controls from './components/Controls'

const songUrl = 'https://m801.music.126.net/20200301152737/6c6186549fcbc96fa49231d2cc45d93b/jdyyaac/025a/0e59/0e5a/502e41fec3936446506e90598afbe772.m4a'
function MusicIndex () {
    useTitle('不识五音，唯爱五谷', false)
    const audioRef = useRef(null)
    const [isPlayed, setPlayState] = useState(false)
    const [songInfo, setSongInfo] = useState({})

    useEffect(() => {
        audioRef.current.addEventListener('loadstart', function (e) {
            const { currentTime, duration } = e.target
            setSongInfo({ currentTime, duration: Math.floor(duration)})
        })
        audioRef.current.addEventListener('timeupdate', function (e) {
            const { currentTime, duration } = e.target
            const process = Math.floor(currentTime/duration*100)
            setSongInfo({
                currentTime: Math.floor(currentTime),
                duration: Math.floor(duration),
                process
            })
        })
    }, [isPlayed])

    const handlePlay = () => {
        setPlayState(true)
        audioRef.current.play()
    }
    const handlePause = () => {
        setPlayState(false)
        audioRef.current.pause()
    }

    return (<Fragment>
        <div className={classnames(styles.music_wrap)}>
            <div className={classnames(styles.music_wrap__cover, { [styles.is_move]: isPlayed})}></div>
            <audio ref={audioRef} src={songUrl} className={styles.music_wrap__controls}>
                your browser does not support the audio
            </audio>
        </div>

        <div className={styles.music_controls}>
            <Controls isPlayed={isPlayed} onPlay={handlePlay} onPause={handlePause}></Controls>
        </div>
    </Fragment>)
}

export default MusicIndex