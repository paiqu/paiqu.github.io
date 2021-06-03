import React, { useState } from 'react';

// material ui
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// animations
// import { useSpring, animated } from 'react-spring';
import { useSpring, a } from '@react-spring/web';

const EMOJI = [
  '😀', '🤔', '🤨', '😮', '😌', '😖', 
  '🤯', '😬', '🥺', '💩', '🤥', '🤒' 
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
}));

export default function FlipEmoji() {
  const classes = useStyles();
  const theme = useTheme();

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
    <Grid 
      className={classes.root}
      container
      onClick={() => setFlipped(x => !x)}
    >
      { !flipped       
        ? <Grid 
          item 
          xs={12}
          >
            <a.div
              style={{ 
                opacity: opacity.to(o => 1 - o), 
                transform 
              }}
            >
              <Typography 
                variant="h3"
                style={{
                  color: theme.palette.primary.contrastText,
                  userSelect: "none",
                  textAlign: 'center',
                  border: `4px solid ${theme.palette.secondary.main}`
                }}
              >
                Click Me
              </Typography>
            </a.div>
          </Grid>
        : <Grid 
            item 
            xs={12}
          >
            <a.div
              style={{
                opacity,
                transform,
                rotateX: '180deg',
              }}
            >
              <Typography variant="h3"
                style={{
                  color: theme.palette.primary.contrastText,
                  userSelect: "none",
                  textAlign: 'center',
                  border: `4px solid ${theme.palette.secondary.main}`
                }}
              >
                {EMOJI[Math.floor(Math.random() * EMOJI.length)]}
              </Typography>
            </a.div>
          </Grid>
      }        
    </Grid>
  );
};