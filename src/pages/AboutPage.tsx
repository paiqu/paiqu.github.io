import React from 'react';
import moment from 'moment';

// material ui
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Header from '../components/layout/Header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';

// firebase
import firebase, { db, userConverter } from '../firebase';
import { useEffect } from 'react';
import { useState } from 'react';

// constant
import { User } from '../constants/interfaces';
import Button from '@material-ui/core/Button'

const LOAD_LIMIT: number = 15;

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

  // states
  const [users, setUsers] = useState<Array<User>>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (count >= LOAD_LIMIT) {
      alert("You cannot load anymore. Try again later");
      
      return;
    }

    setCount(x => x + 1);

    setLoading(true);

    db
      .collection('users')
      .withConverter(userConverter)
      .get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot<User>) => {
        setLoading(false);
        setUsers([]);
        querySnapshot.forEach((doc) => {
          const data = doc.data() as User;

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
        { loading && 
          <Grid item xs> 
            <CircularProgress />
          </Grid>
        }
        { !loading && 
          <Grid item xs>
            <Typography variant='body1' align='left'>
              {users.map((user) => {
                return <li>{`${user.first} ${user.last} email: ${user.email} birthday: ${moment(user.birthday).format("MMM Do YYYY")}`}</li>;
              })}

            </Typography>
            <Typography variant='body1' align='center'>
              Load Times: {count}
            </Typography>
          </Grid>
        }
      </Grid>
    </div>
  )
}