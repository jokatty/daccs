import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './UserName.css';
import getUserData from '../store';

export default function UserName() {
  const [userName, setUserName] = useState('hey');
  // make the backend call for username
  useEffect(async () => {
    const storeData = await getUserData();
    console.log(storeData);
    setUserName(storeData.user_name);
  }, []);

  return (
    <>
      <div className="userName">
        <Stack direction="row" spacing={2}>
          <Avatar>JD</Avatar>
        </Stack>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={3}>
            <p>1</p>
          </Grid>
          <Grid xs={6}>
            <Grid xs={12}>
              <Typography>Name</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="h6" component="h6">
                {userName}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <MoreHorizIcon />
          </Grid>
        </Grid>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
}
