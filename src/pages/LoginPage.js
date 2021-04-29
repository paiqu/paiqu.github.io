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

  const [error, setError] = useState("");

  const handleChange = name => event => {
    setInfos({
      ...infos,
      [name]: event.target.value
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
      setError(errorMessage);

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }


      console.log(error);
    });
  };
  
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center'>
        Log in
      </Typography>
      {/* <StyledFirebaseAuth 
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      /> */}
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
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Log in
        </Button>
      </form>
    </div>
  );
}