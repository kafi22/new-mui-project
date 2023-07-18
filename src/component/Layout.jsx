import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from '../component/index'

const Layout = () => {
  return (
    <>
    <Navbar />
    <section>
        <Outlet />
    </section>
    <Footer />
    
    </>
  )
}

export default Layout