import React from 'react'
import { NavLink } from 'react-router-dom';
import Wrapper from '../Wrappers/Navbar';

const Navbar = () => {
  return ( 
    <Wrapper>
    <nav className='navBar'>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'about'}>About</NavLink>
    <NavLink to={'products'}>Product</NavLink>
    <NavLink to={'login'}>Login</NavLink>
    </nav>
    </Wrapper>
  )
}

export default Navbar