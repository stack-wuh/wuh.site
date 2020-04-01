import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './codeBlock'
import styles from 'styles/markdown.module.scss'

const Preview = ({
    source
}) => {
    return (
        <div className={styles.markdown}>
            <ReactMarkdown
            source={source}
            renderers={{ code: CodeBlock }} />
        </div>)
}

Preview.defaultProps = {
    source: ''
}

export default Preview