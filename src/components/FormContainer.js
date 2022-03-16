import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import UserName from './UserName';
import UserDetails from './UserDetails';
import EditProfile from './EditProfileModal';
import { getUserData } from '../store';

export default function FormConatiner() {
  // set the initial state
  const [userDetails, setUserDetails] = useState({ user_address: '', bank_account: '', email: '' });
  const [userName, setUserName] = useState('');

  useEffect(async () => {
    const userData = await getUserData();
    setUserDetails(userData);
    setUserName(userData.user_name);
  }, []);
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
          <UserName userName={userName} />
          <UserDetails userDetails={userDetails} />
          <EditProfile userDetails={userDetails} />
        </Paper>
      </Box>
    </Container>
  );
}
