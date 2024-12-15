'use client';
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { redirect } from 'next/navigation';

const page = () => {
  return (
    <div>
      <Container
        maxWidth='sm'
        style={{ textAlign: 'center', marginTop: '20vh' }}
      >
        <Typography variant='h2' gutterBottom>
          Welcome Rameen
        </Typography>
        <Typography variant='caption' sx={{ opacity: '0.6' }}>
          This app is designed to provide real-time feedback to help you improve
          your spoken English. Using advanced AI technology, it listens to your
          speech, analyzes your pronunciation, grammar, and fluency, and gives
          personalized feedback to guide your progress. Start practicing now and
          enhance your speaking skills effectively!
        </Typography>
        <Box mt={4}>
          <Button
            variant='contained'
            size='large'
            sx={{ bgcolor: '#93C276' }}
            onClick={() => {
              redirect('/practice-page');
            }}
          >
            Start Practice
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default page;
