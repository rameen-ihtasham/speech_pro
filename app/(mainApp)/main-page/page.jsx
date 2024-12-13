import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material';

const page = () => {
  return (
    <div>
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h2" gutterBottom>
        Welcome
      </Typography>
      <Box mt={4}>
        <Button variant="contained" size="large" sx={{bgcolor: '#93C276'}}>
          Start Practice
        </Button>
      </Box>
    </Container>
    </div>
  )
}

export default page
