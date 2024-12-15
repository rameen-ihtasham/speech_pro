'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LensIcon from '@mui/icons-material/Lens';
import { useState } from 'react';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import { MicTwoTone } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import SettingsVoiceTwoToneIcon from '@mui/icons-material/SettingsVoiceTwoTone';

const Page = () => {
  const [recording, setRecording] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleRecording = () => {
    setRecording(!recording);
  };
  const handleSubmit = () => {
    setSubmit(!submit);
  };

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
            {submit ? (
              <LensIcon sx={{ color: '#013221' }} />
            ) : (
              <TripOriginIcon sx={{ color: '#AB3131' }} />
            )}

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
              I am dedicated to improving my spoken English by practicing
              regularly and focusing on clear pronunciation, correct grammar,
              and expanding my vocabulary. I will engage in meaningful
              conversations, repeat useful phrases, and describe everyday
              situations to enhance my fluency, confidence, and ability to
              express myself effectively in English in various real-life
              scenarios.
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
                bgcolor: recording ? '#FDFD66' : '#00563E',
              }}
              onClick={handleRecording}
            >
              {recording == true ? (
                <SettingsVoiceTwoToneIcon
                  sx={{ fontSize: '40px', color: 'black' }}
                />
              ) : (
                <MicTwoTone sx={{ fontSize: '40px' }} />
              )}
            </Button>
            <Button
              variant='contained'
              sx={{
                width: '15%',
                bgcolor: '#e07a5f',
                color: 'black',
                fontWeight: '600',
              }}
              disabled={recording}
              onClick={handleSubmit}
            >
              {submit ? 'Next Test' : 'Submit'}
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
            {submit && (
              <Typography sx={{ opacity: '1', fontSize: '18px' }}>
                Great job! Your speech was clear, confident, and grammatically
                sound, with good vocabulary. To improve, work on reducing pauses
                for better fluency and adding variation in tone for a more
                engaging delivery. <em>Score: 87/100.</em>
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
