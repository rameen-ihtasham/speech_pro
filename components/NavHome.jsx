'use client';
import '../styles/global.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const pages = ['Home', 'Practise', 'Progress'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavHome = () => {
  const [activePage, setActivePage] = useState('Home'); // Track the active page

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to check if the button is active
  const getButtonStyle = (pageName) => {
    return activePage === pageName
      ? { color: 'white', fontWeight: '700', fontSize: '15px' }
      : { color: 'white' };
  };

  return (
    <Box
      height={'10vh'}
      bgcolor={'#3d405b'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingLeft={10}
      paddingRight={10}
    >
      <Typography variant='h3' color='#f4f1de' fontWeight={700}>
        Speech Pro
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Button
          sx={getButtonStyle('Home')} // Apply dynamic styling for Home
          onClick={() => {
            setActivePage('Home'); // Update the active page
            redirect('/main-page');
          }}
        >
          Home
        </Button>
        <Button
          id='demo-positioned-button'
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={(e) => {
            handleClick(e);
            setActivePage('Practise'); // Update active page when Practice button is clicked
          }}
          sx={getButtonStyle('Practise')} // Apply dynamic styling for Practice
        >
          Practice
        </Button>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem
            onClick={(e) => {
              handleClose(e);
              setActivePage('Practise'); // Update active page for Beginner
              redirect('/practice-page?level=beginner');
            }}
          >
            Beginner
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              handleClose(e);
              setActivePage('Practise'); // Update active page for Intermediate
              redirect('/practice-page?level=intermediate');
            }}
          >
            Intermediate
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              handleClose(e);
              setActivePage('Practise'); // Update active page for Pro
              redirect('/practice-page?level=pro');
            }}
          >
            Pro
          </MenuItem>
        </Menu>
        <Button
          sx={getButtonStyle('Progress')} // Apply dynamic styling for Progress
          onClick={() => {
            setActivePage('Progress'); // Update the active page
            redirect('/progress-page');
          }}
        >
          Progress
        </Button>
      </Box>
      <Button>
        <Avatar src={'prof.jpg'} alt='user'></Avatar>
      </Button>
    </Box>
  );
};

export default NavHome;
