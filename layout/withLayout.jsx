import Header from '@/components/header'
import Footer from '@/components/footer'
import Menu from '@/components/menu'
import ShareButton from '@/components/button/share'
import LeaveButton from '@/components/button/leave'
import ThemeSwithButton from '@/components/button/theme'

const Layout = (Wrapper) => {

  return (props) => (<div className='b-layout'>
    <Header />
    <main className='main'>   
      <div className='slide-menu'>
        <Menu />
      </div>
      <div className='main-container' >
        <ShareButton />
        <LeaveButton />
        <ThemeSwithButton />
        <Wrapper {...props} />
      </div>
    </main>
    <Footer />
    <style jsx global>{`
      .b-layout {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: var(--color-background-primary);
      }
      .header {}
      .main {
        display: flex;
        justify-content: space-between;
        margin-top: 75px;
        width: 80%;
      }
      .slide-menu {
        width: 15%;
        margin-right: 20px;
      }
      .main-container {
        flex: 1;
        width: 80%;
      }
      .footer {}
    `}</style>
  </div>)
}

export default Layout