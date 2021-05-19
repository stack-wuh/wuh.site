import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.group('================== ErrorBoundary =================')
    console.error('ErrorBoundary error', error)
    console.error('ErrorBoundary errorInfo', errorInfo)
    console.groupEnd()
    this.setState({
      hasError: true
    })
  }

  render () {
    if (this.state.hasError) {
      return <div>
        <h4>服务器内部错误!</h4>
      </div>
    }

    return this.props.children
  }
}

export default ErrorBoundary