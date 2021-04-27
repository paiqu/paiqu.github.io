import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10vh',
  },
  appBar: {
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary.main,
  },
}));


export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar 
        className={classes.appBar} 
        color='transparent'
      >
        <Toolbar>
          <Link
            className={classes.logo}
            variant='h3'
            href='/'
            color='textPrimary'
          >
            Pai
          </Link>
          <div className={classes.grow} />
          <Link
            variant='h5'
            href='/'
            color='textPrimary'
            style={{
              textUnderlinePosition: 'under',
              textDecorationColor: theme.palette.secondary.main,
              margin: '1rem',
            }}
          >
            Home
          </Link>
          <Link
            variant='h5'
            href='https://github.com/paiqu'
            target="_blank"
            color='textPrimary'
            align='start'
            style={{
              textUnderlinePosition: 'under',
              textDecorationColor: theme.palette.secondary.main,
              margin: '1rem',
            }}
          >
            My Github
          </Link>
          <Link
            variant='h5'
            href='/about'
            color='textPrimary'
            style={{
              textUnderlinePosition: 'under',
              textDecorationColor: theme.palette.secondary.main,
              margin: '1rem',
            }}
          >
            About Me
          </Link>
          <Link
            variant='h5'
            href='/'
            color='textPrimary'
            style={{
              textUnderlinePosition: 'under',
              textDecorationColor: theme.palette.secondary.main,
              margin: '1rem',
            }}
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}