import Image from 'next/image'
import withConfig from '@/hooks/withConfig'

const Header = () => {
  const config = withConfig()
  return <header className="ww_header">
    <div className='container'>
      <div className='lf'>
        <Image src="/icons/favicon-192.png" width="48px" height="48px" alt="favicon" />
        <strong className='title'>{config?.header.title}</strong>
      </div>
      <div className='empty'></div>
      <div className="rg"></div>
    </div>
  </header>
}

export default Header
