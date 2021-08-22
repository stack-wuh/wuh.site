import { useState } from 'react'
import Dialog from '@/components/dialog'
import Menu from '@/components/menu'

const Mobile = () => {
  const [visible, setvisible] = useState(false)
  const toggleVisible = () => {
    setvisible(!visible)
  }
	return (
		<div className="mobile-header">
      <Dialog visible={visible} onCancel={toggleVisible} position='left'>
        <Menu />
      </Dialog>
			<div className="container">
        <a className='item'><span role='button' aria-hidden onClick={toggleVisible} className='item iconfont icon-all' /></a>
        <a href="/" role='button' className='item' aria-hidden><span className='item iconfont icon-code title'>WUH.SITE</span></a>
        <span className='item'></span>
      </div>
			<style jsx>{`
				.mobile-header {
					position: fixed;
					width: 100%;
					height: 60px;
					display: flex;
					align-items: center;
					background-color: var(--color-background-header);
					top: 0;
					left: 0;
					right: 0;
					z-index: 100;
					-webkit-backdrop-filter: blur(5px);
					backdrop-filter: blur(5px);
					border-bottom: 1px solid var(--color-border);
					box-shadow: 0 2px 2px 2px var(--color-shadow);
					transition: var(--transition-base);
				}

        .container {
          width: 100%;
          display: flex;
          place-content: center;
          place-items: center;
          padding: 0 1.33rem;
        }
        .container .item {
          flex: 1;
          display: inline-block;
        }
        .container .title {
          width: 80%;
          text-align: center;
        }
			`}</style>
      <style jsx global>{`
        #nav {
          width: 75%;
          top: 16px;
        }
      `}</style>
		</div>
	);
};

export default Mobile;
