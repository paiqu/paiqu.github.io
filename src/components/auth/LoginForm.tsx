import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from "react-router-dom";

// Firebase
import firebase from '../../firebase';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from "@material-ui/core/Link";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


type Props = {
  setInfo: () => void;
};
export default function LoginForm(props: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  return (
      <div className={classes.root}>
        <Typography variant='h2' align='center'>
          Log in
        </Typography>
        <Button 
          variant='outlined' 
          color='secondary'
          component={RouterLink}
          to='/'
        >
          Home
        </Button>
        <form onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            required
            variant="outlined"
            color='secondary'
            label="email"
            type="email"
            onChange={handleChange('email')}
          />
          <TextField
            required
            variant="outlined"
            color='secondary'
            label="password"
            type="password"
            onChange={handleChange('password')}
          />
          <Link
            onClick={handleDialogOpen}
          >
            Forgot Your Password?
          </Link>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
          >
            Log in
          </Button>
        </form>
        <Dialog open={dialogState.open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Forgot your password?</DialogTitle>
          <form onSubmit={handleForgotPassword}>
            <DialogContent>
              <DialogContentText>
                Enter your email and we'll send you a link to reset your password.
              </DialogContentText>
              <TextField
                required
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                onChange={handleDialogEmail}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>
              <Button 
                type='submit' 
                // onClick={handleDialogClose} 
                color="primary"
                vairant='contained'
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
  );
    
}