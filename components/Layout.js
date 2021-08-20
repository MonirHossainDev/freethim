import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
