import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function ProfilePage({setAuth, ...props}) {
  const classes = useStyles();
  const theme = useTheme();

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      setAuth({
        authenticated: false,
      });
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center'>
        Profile Page
      </Typography>
      <Typography variant='h4' align='center'>
        Unavailable Yet
      </Typography>
      <Button 
        variant='contained' 
        color='secondary'
        component={RouterLink}
        to='/'
      >
        Home
      </Button>
      <Button 
        variant='outlined' 
        color='secondary'
        component={RouterLink}
        to='/'
      >
        Log out
      </Button>

    </div>
  );
}