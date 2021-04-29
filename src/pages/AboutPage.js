import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default function AboutPage(props) {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container>
        <Toolbar />
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>
            About Me
          </Typography>
          <Typography variant='body1' align='center'>
            Hello, my name is Pai.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}