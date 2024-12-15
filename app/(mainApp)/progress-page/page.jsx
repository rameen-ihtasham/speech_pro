'use client';
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Menu,
} from '@mui/material';
import Image from 'next/image';

const Page = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [graph, setGraph] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setGraph(true);
  };

  return (
    <div>
      <Box
        height={'10vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        paddingRight={4}
      >
        <Button
          id='demo-positioned-button'
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            width: '250px',
            color: '#93C276',
            fontWeight: '700',
            fontSize: '15px',
            borderBottom: '1px solid #93C276',
          }}
        >
          Select Time Period
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
          <MenuItem onClick={handleClose} sx={{ width: '250px' }}>
            Weekly
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ width: '250px' }}>
            Montly
          </MenuItem>
        </Menu>
      </Box>
      {graph && (
        <Box
          height={'80vh'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={'/progress.png'}
            alt='progress graph'
            width={1000}
            height={450}
          ></Image>
        </Box>
      )}
    </div>
  );
};

export default Page;
