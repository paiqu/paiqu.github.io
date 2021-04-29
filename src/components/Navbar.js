import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

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
  "@media (max-width: 900px)": {
    paddingLeft: 0,
  },
  drawerContainer: {
    padding: "20px 30px",
  }
}));


export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const textColor = theme.palette.primary.contrastText;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const getDrawerChoices = () => {
    return (
      <div>
        <Link
          key='home'
          variant='h5'
          href='/'
          color={'textPrimary'}
          style={{
            textUnderlinePosition: 'under',
            textDecorationColor: theme.palette.secondary.main,
          }}
        >
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          key='my-github'
          variant='h5'
          href='https://github.com/paiqu'
          target="_blank"
          color={'textPrimary'}
          align='start'
          style={{
            textUnderlinePosition: 'under',
            textDecorationColor: theme.palette.secondary.main,
          }}
        >
          <MenuItem>My Github</MenuItem>
        </Link>
        <Link
          key='about-me'
          variant='h5'
          component={RouterLink}
          to='/about'
          color={'textPrimary'}
          style={{
            textUnderlinePosition: 'under',
            textDecorationColor: theme.palette.secondary.main,
          }}
        >
          <MenuItem>About Me</MenuItem>
        </Link>
        <Link
          key='login'
          variant='h5'
          component={RouterLink}
          to='/login'
          color={'textPrimary'}
          style={{
            textUnderlinePosition: 'under',
            textDecorationColor: theme.palette.secondary.main,
          }}
        >
          <MenuItem>Login</MenuItem>
        </Link>
      </div>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Link
          className={classes.logo}
          variant='h3'
          href='/'
          color={'textPrimary'}
        >
          Pai
        </Link>
        <div className={classes.grow} />
        <Link
          variant='h5'
          href='/'
          color={'textPrimary'}
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
          color={'textPrimary'}
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
          component={RouterLink}
          to='/about'
          color={'textPrimary'}
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
          component={RouterLink}
          to='/login'
          color={'textPrimary'}
          style={{
            textUnderlinePosition: 'under',
            textDecorationColor: theme.palette.secondary.main,
            margin: '1rem',
          }}
        >
          Login
        </Link>
      </Toolbar>
    );
  };

  const displayMobile = () => {
      const handleDrawerOpen = () => 
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
    
      const handleDrawerClose = () => 
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: theme.palette.primary.contrastText,
            'aria-label': 'menu',
            'aria-haspopup': "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <Link
            className={classes.logo}
            variant='h3'
            href='/'
            color={'textPrimary'}
          >
            Pai
        </Link>
      </Toolbar>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar 
        className={classes.appBar} 
        color='transparent'
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}