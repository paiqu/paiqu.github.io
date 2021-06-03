import React from 'react';
import moment from 'moment';

// material ui
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// firebase
import firebase, { db, userConverter } from '../firebase';
import { useEffect } from 'react';
import { useState } from 'react';

// constant
import { User } from '../constants/interfaces';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  mainGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface AboutPageProps {

};



export default function AboutPage(props: AboutPageProps) {
  const classes = useStyles();
  const theme = useTheme();

  const [users, setUsers] = useState<Array<User>>([]);

  const handleClick = () => {
    db
      .collection('users')
      .withConverter(userConverter)
      .get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot<User>) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          const data = doc.data() as User;
          console.log(data);

          setUsers(oldArray => [...oldArray, data]);
        });
    });
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.mainGrid}>
        <Toolbar />
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>
            About Me
          </Typography>
          <Typography variant='body1' align='center'>
            Hello, my name is Pai.
          </Typography>
        </Grid>
        <Grid item xs>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleClick}
          >
            Load Database
          </Button>
        </Grid>
        <Grid item xs>
          <Typography variant='body1' align='left'>
            {users.map((user) => {
              return <li>{`${user.first} ${user.last} email: ${user.email} birthday: ${moment(user.birthday).format("MMM Do YYYY")}`}</li>;
            })}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}