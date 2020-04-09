import React, { Fragment, useRef, useState, useEffect } from 'react'
import { useTitle } from 'hooks'
import styles from 'styles/music.module.scss'
import Controls from './components/Controls'
import { Circle } from 'components/Progress'

const songUrl = 'https://src.wuh.site/media/brave.mp3'
let GlobalId = null
function MusicIndex () {
    useTitle('不识五音，唯爱五谷', false)
    const audioRef = useRef(null)
    const coverRef = useRef(null)
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
        audioRef.current.addEventListener('ended', function (e) {
            setPlayState(false)
            window.cancelAnimationFrame(GlobalId)
        })
    }, [isPlayed])

    const handlePlay = () => {
        setPlayState(true)
        audioRef.current.play()
        GlobalId = window.requestAnimationFrame(() => handleRotateCover(true))
    }
    const handlePause = () => {
        setPlayState(false)
        audioRef.current.pause()
        window.cancelAnimationFrame(GlobalId)
    }

    let deg = 1
    const reg = /(\d+)/gi
    const handleRotateCover = (isMove) => {
        const transform = coverRef.current.style.transform
        const last = transform.match(reg) && transform.match(reg).toString()
        if (last) deg = +last
        deg = deg + 1
        if (deg === 360) deg = 0
        coverRef.current.style.transform = 'rotate('+ deg +'deg) '
        if (isMove) {
            GlobalId = window.requestAnimationFrame(handleRotateCover)
        }
    }

    return (<Fragment>

        <div className={styles.music__wrapper}>
            
            <audio ref={audioRef} src={songUrl} className={styles.music_wrap__controls}>
                your browser does not support the audio
            </audio>

            <div ref={coverRef} className={styles.music__wrapper__cover}></div>
            <div className={styles.music__wrapper__progress}>
                <Circle 
                    className={styles.music_circle} 
                    width={480} 
                    height={480} 
                    x={240} 
                    y={240} 
                    radius={236}
                    strokeWidth={8}
                    process={songInfo.process}>
                </Circle> 
            </div>
        </div>

        <div className={styles.music_controls}>
            <Controls  isPlayed={isPlayed} onPlay={handlePlay} onPause={handlePause}></Controls>
        </div>
    </Fragment>)
}

export default MusicIndex