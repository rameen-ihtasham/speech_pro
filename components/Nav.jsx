'use client';
import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { redirect } from 'next/navigation';

const Nav = () => {
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
      <Button
        variant='contained'
        sx={{
          bgcolor: '#f4f1de',
          color: '#3d405b',
          borderRadius: '10px',
          width: '15rem',
        }}
        onClick={() => {
          redirect('/level-selection');
        }}
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default Nav;
