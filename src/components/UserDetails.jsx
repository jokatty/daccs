import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './UserDetails.css';
import getUserData from '../store';

export default function UserDetails() {
  // set the initial state
  const [userDetails, setUserDetails] = useState({ user_address: '', bank_account: '', email: '' });
  useEffect(async () => {
    const userData = await getUserData();
    console.log(userData);
    setUserDetails(userData);
  }, []);

  return (
    <>
      <div className="userDetailsDiv">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <div>{userDetails.user_address}</div>
          </Grid>
          <Grid xs={6}>
            <div>{userDetails.bank_account}</div>
          </Grid>
          <Grid xs={6}>
            <div>{userDetails.email}</div>
          </Grid>
          <Grid xs={6}>
            <div>{userDetails.phone}</div>
          </Grid>
        </Grid>
      </div>
      <hr />
    </>
  );
}
