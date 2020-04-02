import React, { useRef}  from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './codeBlock'

const Preview = ({
    source
}) => {
    const wrapRef = useRef()

    const handleClick = () => {
        // const imgs = wrapRef.current.querySelectorAll('img')
        // const getElemList = () => [...imgs]
        // getElemList().forEach(node => {
        //     node.onclick = (function () {
        //         let url = new URL(node.src)
        //         window.open(url)
        //     })()
        // })
    }

    return (
        <div onClick={() => handleClick()} ref={wrapRef} className='markdown'>
            <ReactMarkdown
            source={source}
            renderers={{ code: CodeBlock }} />
        </div>)
}

Preview.defaultProps = {
    source: ''
}

export default Preview