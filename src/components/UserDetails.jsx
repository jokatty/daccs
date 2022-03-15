import { Grid } from '@mui/material';
import React from 'react';
import './UserDetails.css';

export default function UserDetails(prop) {
  const { userDetails } = prop;
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
