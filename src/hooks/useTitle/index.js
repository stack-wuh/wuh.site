import { useRef, useEffect } from 'react'
const config = require('../../utils/config')

const useTitle = (title, restoreOnUnmount = false) => {
    const prevTitle = useRef(document.title)
    document.title = config.title.prefix + title + config.title.suffix
    useEffect(() => {
        if (restoreOnUnmount) {
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                document.title = prevTitle.current
            }
        } else {
            return
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useTitle