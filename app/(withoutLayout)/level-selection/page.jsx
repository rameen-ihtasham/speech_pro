import React from 'react';
import "../../../styles/global.css";
import { Box, Button, Typography, Link } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FoundationIcon from '@mui/icons-material/Foundation';
import BalanceIcon from '@mui/icons-material/Balance';
import SchoolIcon from '@mui/icons-material/School';

const Page = () => {
  return (
    <div>
      <Box
      bgcolor="#ffead1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="97vh"
      >
        <Box
          bgcolor="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="65vh"
          padding={10}
          gap={4}
          borderRadius={4} // Optional: Adds rounded corners to the box
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)" // Optional: Adds a shadow
        >
          <Typography sx={{ opacity: '0.9', fontWeight:'bold', fontSize:'larger'}}>
            What is your English fluency level?
          </Typography>
        <List
        sx={{ width: '%', bgcolor: 'inherit' }}
        component="nav"
        aria-labelledby="nested-list-subheader">
        <ListItemButton>
          <ListItemIcon>
            <FoundationIcon />
          </ListItemIcon>
          <ListItemText primary="Beginer" secondary="I am just starting to learn English."/>

        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Intermediate" secondary="I can hold simple conversations." />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SchoolIcon />  
          </ListItemIcon>
          <ListItemText primary="Pro" secondary="I am confident with my skills and speak fluently." />
        </ListItemButton>
      </List>
      <Box 
  display="flex"
  justifyContent="space-between"
  width="100%" // Ensures the buttons span the full width of the container
>
  <Button 
    variant="contained" 
    size="medium" 
    sx={{ backgroundColor: '#93C276' }}
  >
    Back
  </Button>
  <Button 
    variant="contained" 
    size="medium" 
    sx={{ backgroundColor: '#93C27' }}
  >
    Next
  </Button>
</Box>

    </Box>
  </Box>
</div>
  );
};

export default Page;
