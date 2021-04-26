import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from "@material-ui/core/Link";

const background = "https://images.unsplash.com/photo-1551554781-c46200ea959d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(to right,#25b7fa,#f8ce5a)`,
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
  title: {
    color: "#f0f0f0",
  },
});


export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
        className={classes.grid} 
        container spacing={1}
      >
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Typography variant="h1" className={classes.title}>
            Pai Qu
          </Typography>
        </Grid>
        <Grid
          container
          item xs={12} 
          alignItems='center'
          style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="paiqu"
            data-version="v1"
          />
        </Grid>
        <Grid container item xs={12} alignItems="center" justify='center'>
          <Grid item xs={3}>
            <Link
              href={`https://www.instagram.com/pai__q/`}
              target="_blank"
            >
              <img
                src="./img/icon/instagram-icon.png"
                style={{
                  width: "100%",
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}