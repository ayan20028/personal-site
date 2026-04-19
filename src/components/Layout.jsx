import { Outlet } from 'react-router'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import './Layout.css'

function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Breadcrumb />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
