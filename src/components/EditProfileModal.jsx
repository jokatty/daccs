import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditProfile(prop) {
  const { userDetails } = prop;
  console.log(userDetails);

  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(userDetails.user_address);
  const [bankAccount, setBankAccount] = useState('');
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setAddress(userDetails.user_address);
    setBankAccount(userDetails.bank_account);
    setEmail(userDetails.email);
    setPhone(userDetails.phone);
  }, [userDetails]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle the user submit details
  const handleSubmit = async () => {
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} fullWidth>
        Edit Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e) => { setAddress(e.value); }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bank_account"
            label="Bank account"
            type="text"
            fullWidth
            variant="standard"
            value={bankAccount}
            onChange={(e) => {
              setBankAccount(e.value);
            }}
          />
          {' '}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone number"
            type="text"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => { setPhone(e.value); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
