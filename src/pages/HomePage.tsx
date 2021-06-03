import React, { useState } from 'react';

// material ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// component
import Header from '../components/Header';

// animations
// import { useSpring, animated } from 'react-spring';
import { useSpring, a } from '@react-spring/web';

const background = "https://images.unsplash.com/photo-1551554781-c46200ea959d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    // minHeight: '100vh',
    // minWidth: '100%',
    width: '100%',
    height: '100%',
    position: 'fixed',
    // top: 0,
    // left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    width: '90%',
  },
}));

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
      mass: 5,
      tension: 500,
      friction: 80
    },
  });

  return (
    <div className={classes.root}>
      <Header />
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
          <div onClick={() => setFlipped(x => !x)}>
            <a.div
              style={{ 
                opacity: opacity.to(o => 1 - o), 
                transform 
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
                    userSelect: "none",
                  }}
                >
                  Coming soon
                </Typography>
              </Box>
            </a.div>
            <a.div
              style={{
                opacity,
                transform,
                rotateX: '180deg',
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
                    userSelect: "none",
                    textAlign: 'center',
                  }}
                >
                  😎 
                </Typography>
              </Box>
            </a.div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}