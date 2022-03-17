import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/material/Divider';

export default function UserName(prop) {
  const { userName } = prop;

  // style object
  const stylingObj = {
    container: {
      padding: '1.5rem',
    },
    avatar: {
      borderRadius: 8,
      backgroundColor: '#C5BDDD',
      color: '#3A125E',
      fontSize: '.75rem',
    },
    sub: {
      color: 'gray',
      fontSize: '.65rem',
    },
    userName: {
      fontSize: '.75rem',
      color: 'black',
      marginTop: 0,
      paddingTop: 0,
    },
  };

  return (
    <>
      <Grid container style={stylingObj.container}>
        <Grid xs={2}>
          <Avatar style={stylingObj.avatar}>JD</Avatar>
        </Grid>
        <Grid xs={8}>
          <Grid container sx={{ flexDirection: 'column' }}>
            <Grid><Typography variant="subtitle2" style={stylingObj.sub}>Name</Typography></Grid>
            <Grid sx={{ mt: -0.5 }}>
              <Typography variant="subtitle2" style={stylingObj.userName}>{userName}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2} display="flex" justifyContent="flex-end">
          <MoreHorizIcon color="disabled" />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}
