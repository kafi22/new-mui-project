import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Wrapper from '../Wrappers/Navbar';
import UseCustomsApi from '../UserContext/UseCustomsApi';


const Navbar = () => {

 const {logOutFn, user} = UseCustomsApi()
 const navigate = useNavigate()

  return (
    <Wrapper>
    <AppBar position="fixed" sx={{ top : 0}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginRight: '12px' }}>
          <NavLink to={'/'}>Home</NavLink>
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginRight: '12px' }}>
        <NavLink to={'about'}>About</NavLink>
        </Typography>
        <Typography variant="body1" component="div"sx={{ marginRight: '12px' }} >
        <NavLink to={'product'}>Product</NavLink>
        </Typography>

        

        

        {user.email ? 

          (
          <Button variant='contained'
          onClick={() => {logOutFn(), navigate('/login')}}

          >
              <Typography>
                Logout
              </Typography>
          </Button>
          )
          :
          (
            <Button variant="outlined" color="inherit"
            
            >
            <Link to={'login'}>
            Login
            </Link>
          </Button>
          )
      }

      </Toolbar>
    </AppBar>
    </Wrapper>
  );
};

export default Navbar;



