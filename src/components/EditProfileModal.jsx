import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';
import { updateUserData } from '../store';

export default function EditProfile(prop) {
  const { userDetails } = prop;
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
    const userName = userDetails.user_name;
    const { id } = userDetails;
    const userData = {
      id, email, address, phone, bankAccount, userName,
    };
    const response = await updateUserData(userData);
    if (response === 200) {
      window.location.reload();
    }
    handleClose();
  };

  // style properties
  const stylingObj = {
    editContainer: {
      marginTop: '3rem',
      marginBottom: '1.5rem',
      width: '90%',
    },
    editBtn: {
      maxHeight: '30px',
      textTransform: 'none',
      backgroundColor: '#000080',
      fontSize: '0.75rem',
    },
  };

  return (
    <Container style={stylingObj.editContainer}>
      <Button variant="contained" onClick={handleClickOpen} fullWidth style={stylingObj.editBtn}>
        Edit profile
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
            value={address || ''}
            onChange={(e) => { setAddress(e.target.value); }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bank_account"
            label="Bank account"
            type="text"
            fullWidth
            variant="standard"
            value={bankAccount || ''}
            onChange={(e) => {
              setBankAccount(e.target.value);
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
            value={email || ''}
            onChange={(e) => {
              setEmail(e.target.value);
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
            value={phone || ''}
            onChange={(e) => { setPhone(e.target.value); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
