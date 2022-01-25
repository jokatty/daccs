import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditProfile() {
  const [open, setOpen] = React.useState(false);
  // set the inital state for input field
  const [address, setAddress] = React.useState('');
  const [bankAccount, setBankAccount] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle the user submit details
  const handleSubmit = () => {
    console.log('submitted');
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
