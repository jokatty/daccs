import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import UserName from './UserName';
import UserDetails from './UserDetails';
import EditProfile from './EditProfileModal';

export default function FormConatiner() {
  const styleForm = {
    containerStyle: {
      marginTop: '10vh',
    },
    boxStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: '100%',
        height: '50%',
      },
    },
  };
  return (
    <Container maxWidth="sm" style={styleForm.containerStyle}>
      <Box sx={styleForm.boxStyle}>
        <Paper elevation={2}>
          <UserName />
          <UserDetails />
          <EditProfile />
        </Paper>
      </Box>
    </Container>
  );
}
