import withLayout from '@/layout/layout'
import { useCookieState } from 'ahooks'
import withConfig from '@/hooks/withConfig'

const Home = () => {
  console.log(process.env)
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
    </div>
  )
}

export default withLayout(Home)
