import { Grid, Divider, Typography } from '@mui/material';
import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function UserDetails(prop) {
  const { userDetails } = prop;
  const stylingObj = {
    container: {
      padding: '1.5rem',
    },
    fieldColor: {
      color: 'gray',
      fontSize: '.65rem',
    },
    fieldValue: {
      color: 'black',
      fontSize: '.75rem',
    },
    alignment: {
      display: 'flex',
      alignItems: 'center',
    },
    bankAc: {
      fontSize: '.75rem',
      color: '#0057BA',
    },

  };
  return (
    <>
      <Grid container style={stylingObj.container}>
        <Grid xs={1} style={stylingObj.alignment}><LocationOnOutlinedIcon fontSize="small" color="disabled" /></Grid>
        <Grid xs={5}>
          <Grid container sx={{ flexDirection: 'column' }}>
            <Grid>
              <Typography variant="subtitle2" style={stylingObj.fieldColor}>Address</Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" style={stylingObj.fieldValue} mt={-0.5}>{userDetails.user_address}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={1} style={stylingObj.alignment}><LinkOutlinedIcon fontSize="small" color="disabled" /></Grid>
        <Grid xs={5}>
          <Grid container sx={{ flexDirection: 'column' }}>
            <Grid><Typography variant="subtitle2" style={stylingObj.fieldColor}>IBAN bank account</Typography></Grid>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" style={stylingObj.bankAc} mt={-0.5}>{userDetails.bank_account}</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid xs={1} style={stylingObj.alignment}><EmailOutlinedIcon fontSize="small" color="disabled" /></Grid>
          <Grid xs={5}>
            <Grid container sx={{ flexDirection: 'column' }}>
              <Grid><Typography variant="subtitle2" style={stylingObj.fieldColor}>Email address</Typography></Grid>
              <Grid>
                <Typography variant="subtitle1" style={stylingObj.fieldValue} mt={-0.5}>{userDetails.email}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={1} style={stylingObj.alignment}><LocalPhoneOutlinedIcon fontSize="small" color="disabled" /></Grid>
          <Grid xs={5}>
            <Grid container sx={{ flexDirection: 'column' }}>
              <Grid><Typography variant="subtitle2" style={stylingObj.fieldColor}>Phone number</Typography></Grid>
              <Grid><Typography variant="subtitle1" style={stylingObj.fieldValue} mt={-0.5}>{userDetails.phone}</Typography></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}
