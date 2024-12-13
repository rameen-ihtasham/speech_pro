import { Box, Typography, Button } from '@mui/material';
import React from 'react';

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
          borderRadius: '10%',
          width: '7rem',
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Nav;
