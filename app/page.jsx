'use client';
import { Box, Button, Typography, Link } from '@mui/material';
import Image from 'next/image';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <Box bgcolor={'#ffead1'} height={'90vh'}>
      <Box height={'50vh'} display={'flex'}>
        <Box
          width={'60%'}
          height={'50vh'}
          display={'flex'}
          justifyContent={'center'}
          padding={10}
          paddingLeft={30}
          flexDirection={'column'}
          gap={4}
        >
          <Typography sx={{ opacity: '0.6' }}>
            An AI-powered platform <br></br> to enhance English fluency through
            personalized practice,
            <br /> real-time feedback, and progress tracking
          </Typography>
          <Link
            textAlign={'left'}
            component='button'
            variant='h5'
            underline='hover'
            onClick={() => {
              console.info("I'm a button.");
            }}
            sx={{ color: '#3d405b' }}
          >
            Get Started &gt;
          </Link>
        </Box>
        <Box
          width={'40%'}
          height={'50vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Image src={'/robo.png'} alt='img' width={300} height={300}></Image>
        </Box>
      </Box>
      <Box height={'40vh'} display={'flex'} justifyContent={'space-around'}>
        <Box
          width={'300px'}
          height={'240px'}
          bgcolor={'#edd9c0'}
          sx={{
            borderTop: '1px solid #3d405b',
            borderLeft: '1px solid #3d405b',
            borderRight: '1px solid #3d405b',
          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={1}
        >
          <Image src={'/robo.png'} alt='img' width={140} height={140}></Image>
          <Typography variant='h5' fontWeight={'500'} color='#3d405b'>
            Real-Time Feedback
          </Typography>
        </Box>
        <Box
          width={'300px'}
          height={'240px'}
          bgcolor={'#edd9c0'}
          sx={{
            borderTop: '1px solid #3d405b',
            borderLeft: '1px solid #3d405b',
            borderRight: '1px solid #3d405b',
          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={1}
        >
          <Image src={'/robo.png'} alt='img' width={140} height={140}></Image>
          <Typography variant='h5' fontWeight={'500'} color='#3d405b'>
            Progress Checking
          </Typography>
        </Box>
        <Box
          width={'300px'}
          height={'240px'}
          bgcolor={'#edd9c0'}
          sx={{
            borderTop: '1px solid #3d405b',
            borderLeft: '1px solid #3d405b',
            borderRight: '1px solid #3d405b',
          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={1}
        >
          <Image src={'/robo.png'} alt='img' width={140} height={140}></Image>
          <Typography variant='h5' fontWeight={'500'} color='#3d405b'>
            Multiple Levels
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
