import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from "react-router-dom";

// Firebase
import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

export default function LoginPage({setAuthDetails, ...props}) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  
  const [infos, setInfos] = useState({
    email: "",
    password: "",
  });

  const [dialogState, setDialogState] = useState({
    open: false,
    email: "",
  })

  const handleChange = name => event => {
    setInfos({
      ...infos,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(infos.email, infos.password)
    .then((userCredential) => {
      setAuthDetails({
        authenticated: true,
      });

      history.push('/profile');
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }

      console.log(error);
    });
  };

  const handleDialogOpen = () => {
    setDialogState({
      ...dialogState,
      open: true,
    });
  };

  const handleDialogClose = () => {
    setDialogState({
      ...dialogState,
      open: false,
    });
  };

  const handleDialogEmail = (event) => {
    setDialogState({
      ...dialogState,
      email: event.target.value,
    });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();

    let auth = firebase.auth();
    let emailAddress = dialogState.email;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      alert('An email has been sent to you.');
      handleDialogClose();
    }).catch(function(error) {
      // An error happened.
      alert(error.message);
    });
  };
  
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