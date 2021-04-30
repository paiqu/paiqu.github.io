import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/Navbar';

const background = "https://images.unsplash.com/photo-1551554781-c46200ea959d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    // background: `linear-gradient(to right,#25b7fa,#f8ce5a)`,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // backgroundImage: `url(${background})`,
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    width: '90%',
  },
}));


export default function HomePage(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid 
        className={classes.grid} 
        container spacing={1}
      >
        <Grid item xs={12} 
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Box
            border={4} 
            color={theme.palette.secondary.main}
            p={2}
          >
            <Typography variant="h3"
              style={{
                color: theme.palette.primary.contrastText,
              }}
            >
              Coming soon
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}