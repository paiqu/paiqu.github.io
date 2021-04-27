import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';


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
      <AppBar className={classes.appBar} position='static' color='transparent'>
        <Toolbar>
          <Grid
            container
            justify='space-between'
          >
            <Grid item xs={6}>
              <Typography
                className={classes.logo}
                variant="h1"
              >
                Pai
              </Typography>
            </Grid>
            <Grid 
              container 
              item 
              spacing={1} 
              xs={6} 
              alignItems='center'
              // justify='space-between'
              justify='flex-end'
            >
              <Grid item xs={12} sm={3}>
                <Link
                  variant='h5'
                  href='/'
                  target="_blank"
                  color='textPrimary'
                  style={{
                    textUnderlinePosition: 'under',
                    textDecorationColor: theme.palette.secondary.main,
                  }}
                >
                  Home
                </Link>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Link
                  variant='h5'
                  href='https://github.com/paiqu'
                  target="_blank"
                  color='textPrimary'
                  style={{
                    textUnderlinePosition: 'under',
                    textDecorationColor: theme.palette.secondary.main,
                  }}
                >
                  My Github
                </Link>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Link
                  variant='h5'
                  href='/'
                  color='textPrimary'
                  style={{
                    textUnderlinePosition: 'under',
                    textDecorationColor: theme.palette.secondary.main,
                  }}
                >
                  About Me
                </Link>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Link
                  variant='h5'
                  href='/'
                  color='textPrimary'
                  style={{
                    textUnderlinePosition: 'under',
                    textDecorationColor: theme.palette.secondary.main,
                  }}
                >
                  Login
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}