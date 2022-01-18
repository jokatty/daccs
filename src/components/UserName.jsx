import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function UserName() {
  return (
    <>
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar>JD</Avatar>
        </Stack>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={3}>
            <p>1</p>
          </Grid>
          <Grid xs={6}>
            <Grid xs={12}>
              <Typography variant="h6" component="h6">
                Justus Darley
              </Typography>
            </Grid>
            <Grid xs={12}>
              <p>Name</p>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <p>2</p>
          </Grid>
        </Grid>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
}
