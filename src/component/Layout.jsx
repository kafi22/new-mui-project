import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from '../component/index';
import Sections from '../Wrappers/Sections';


const Layout = () => {
  return (
    <>
    <Navbar />
    <Sections>
        <Outlet />
    </Sections>
    <Footer />
    
    </>
  )
}

export default Layout