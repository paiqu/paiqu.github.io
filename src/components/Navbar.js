import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
              xs={4} 
              alignItems='center'
            >
              <Grid item xs={12} sm={6}>
                <Button
                  variant='outlined'
                  component={Link}
                  color='secondary'
                  href='https://github.com/paiqu'
                  target="_blank"
                  rel="noopener"
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.secondary.main,
                    marginRight: theme.spacing(1),
                    width: '100%',
                    whiteSpace: 'nowrap',
                  }}
                >
                  My GitHub
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant='contained'
                  color='secondary'
                  style={{
                    width: '100%',
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}