'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LensIcon from '@mui/icons-material/Lens';
import { useState } from 'react';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import { MicTwoTone } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const Page = () => {
  return (
    <Box>
      <Box
        height={'10vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box display={'flex'} justifyContent={'space-between'} width={'40%'}>
          <Typography fontSize={'21px'}>
            Cleared tests of Intermediate level
          </Typography>
          <Box>
            <LensIcon sx={{ color: '#013221' }} />
            <LensIcon sx={{ color: '#013221' }} />
            <LensIcon sx={{ color: '#013221' }} />
            <TripOriginIcon sx={{ color: '#AB3131' }} />
            <TripOriginIcon sx={{ color: '#AB3131' }} />
            <TripOriginIcon sx={{ color: '#AB3131' }} />
            <TripOriginIcon sx={{ color: '#AB3131' }} />
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box
          height={'49vh'}
          width={'80%'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography
            alignSelf={'start'}
            variant='h5'
            sx={{ fontWeight: '700' }}
          >
            Prompt
          </Typography>

          <Box
            bgcolor={'#f0dcc5'}
            height={'90%'}
            width={'100%'}
            sx={{ border: '1px solid black', borderRadius: '8px' }}
            padding={4}
          >
            <Typography sx={{ opacity: '1', fontSize: '18px' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              quia, reiciendis dolores facilis dolorem sit nam delectus
              cupiditate, velit non labore porro laudantium asperiores ad! Earum
              corporis possimus blanditiis eligendi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus, quasi quas laudantium
              nesciunt nobis magni est vero iure quibusdam quis, eaque corporis
              aspernatur iusto temporibus ab nihil, repudiandae nisi sint!
            </Typography>
          </Box>
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'flex-end'}
            paddingTop={1}
            gap={0.5}
          >
            <Button
              variant='contained'
              sx={{
                width: '7%',
                bgcolor: '#00563E',
              }}
            >
              <MicTwoTone sx={{ fontSize: '40px' }} />
            </Button>
            <Button
              variant='contained'
              sx={{
                width: '15%',
                bgcolor: '#e07a5f',
                color: 'black',
                fontWeight: '600',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={2}
      >
        <Box
          height={'25vh'}
          width={'80%'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography
            alignSelf={'start'}
            variant='h5'
            sx={{ fontWeight: '700' }}
          >
            Feedback
          </Typography>

          <Box
            bgcolor={'#f0dcc5'}
            height={'95%'}
            width={'100%'}
            sx={{ border: '1px solid black', borderRadius: '8px' }}
            padding={4}
          >
            <Typography sx={{ opacity: '1', fontSize: '18px' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              quia, reiciendis dolores facilis dolorem sit nam delectus
              cupiditate, velit non labore porro laudantium asperiores ad! Earum
              quia, reiciendis dolores facilis dolorem sit nam delectus
              cupiditate, velit non labore porro laudantium asperiores ad! Earum
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
