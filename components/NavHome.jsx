'use client';
import "../styles/global.css";
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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


const pages = ['Home', 'Practise', 'Progress'];

const NavHome = () => {
  
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
      <Typography variant='h4' color={'#f4f1de'} fontWeight={700}>
        Speech Pro
      </Typography>
    <Box 
    sx={{display: 'flex'}} >
        <Button sx={{color:'white' }}>Home</Button>
        <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'white' }}
      >
        Practise
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
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
        <MenuItem onClick={handleClose}>Beginner</MenuItem>
        <MenuItem onClick={handleClose}>Intermediate</MenuItem>
        <MenuItem onClick={handleClose}>Pro</MenuItem>
      </Menu>
        <Button sx={{color:'white'}}>Progress</Button>
    </Box>
    <Button>
        <Avatar></Avatar>
    </Button>
    </Box>
  );
};

export default NavHome
