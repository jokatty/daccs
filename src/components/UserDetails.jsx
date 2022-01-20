import { Grid } from '@mui/material';
import React from 'react';
import './UserDetails.css';

export default function UserDetails() {
  return (
    <>
      <div className="userDetailsDiv">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <div>Address</div>
          </Grid>
          <Grid xs={6}>
            <div>IBAN Bank Account</div>
          </Grid>
          <Grid xs={6}>
            <div>Email</div>
          </Grid>
          <Grid xs={6}>
            <div>Phone Number</div>
          </Grid>
        </Grid>
      </div>
      <hr />
    </>
  );
}
