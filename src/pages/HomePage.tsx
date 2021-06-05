import React, { useState } from 'react';

// material ui
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// component
import Header from '../components/layout/Header';
import FlipEmoji from '../components/animation/FlipEmoji';

// animations
// import { useSpring, animated } from 'react-spring';
import { useSpring, a } from '@react-spring/web';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.main,
    minHeight: '100vh',
    minWidth: '100%',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    width: '90%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const EMOJI = [
  '😀', '🤔', '🤨', '😮', '😌', '😖', 
  '🤯', '😬', '🥺', '💩', '🤥', '🤒' 
];

interface HomePageProps {

};

export default function HomePage(props: HomePageProps) {
  const classes = useStyles();
  const theme = useTheme();

  // animation for COMING SOON card
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { 
      mass: 3,
      tension: 500,
      friction: 80
    },
  });



  return (
    <div className={classes.root}>
      <Header />
      <Grid 
        className={classes.grid} 
        container 
        spacing={1}
      >
        <Grid 
          item 
          xs={5} 
          lg={2}
        >
          <FlipEmoji />
        </Grid>
      </Grid>
    </div>
  )
}