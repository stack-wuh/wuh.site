import { CookieProvider } from './provider'

const withCookie = (Component) => {
  return function CookieProvider (props) {
    return <CookieProvider.Consumer>
      {
        context => <Component {...props} {...context} />
      }
    </CookieProvider.Consumer>
  }
}

export default withCookie