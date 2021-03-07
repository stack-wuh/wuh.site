import Header from '@/components/header'
import Footer from '@/components/footer'

const Layout = (Wrapper) => {
  return (props) => (<div className='b-layout'>
    <Header />
    <main className='main'>
      <Wrapper {...props} />
    </main>
    <Footer />
    <style jsx global>{`
      .b-layout {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .header {}
      .main {
        margin-top: 75px;
        width: 80%;
      }
      .footer {}
    `}</style>
  </div>)
}

export default Layout