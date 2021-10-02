import withLayout from '@/layout/layout'
import { useCookieState } from 'ahooks'
import withConfig from '@/hooks/withConfig'

const Home = () => {
  const config = withConfig()
  const [theme, setTheme] = useCookieState('theme', config?.stateLocale.options)
  const handleToggle = () => {
    const val = theme === 'light' ? 'dark' : 'light'
    setTheme(val)
  }
  return (
    <div>
      <h1>hello, Home page.{theme}</h1>

      <button onClick={handleToggle}>clicked</button>
      <style jsx>{`
        div {
          height: 140vh;
        }
      `}</style>
    </div>
  )
}

export default withLayout(Home)
