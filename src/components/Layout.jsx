import { Outlet } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import './Layout.css'

function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
