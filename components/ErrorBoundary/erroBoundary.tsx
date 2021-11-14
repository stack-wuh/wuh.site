import * as React from 'react'

type ErrorBoundaryStateProps = {
  hasError: boolean
}
class ErrorBoundary extends React.Component<unknown, ErrorBoundaryStateProps> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    console.error(
      error,
      errorInfo
    )
  }

  render() {
    if (this.state.hasError) {
      return <div>
        <h3>Error</h3>
        <p>服务器渲染错误!</p>
      </div>
    }
    return this.props.children
  }
}

export default ErrorBoundary