import { useRef, useEffect } from 'react'

const useTitleVisible = () => {
    const prevTitle = useRef(document.title)
    useEffect(() => {
        window.addEventListener('visibilitychange', function () {
            const isVisible = document.hidden
            if (isVisible) {
                document.title = '别走小可爱, 求求了 | SHADOW'
            } else {
                document.title = prevTitle.current
            }
        })
    }, [])
}

export default useTitleVisible