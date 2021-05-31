import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from "react-router-dom";

// Firebase
import firebase from '../firebase';

// Material UI
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Link from "@material-ui/core/Link";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Formik
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

// Components


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface Props {
    setAuth: (auth: boolean) => void;
};

interface ILoginForm {
    email: string,
    password: string
};

export default function LoginPage({ setAuth }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  

  const [dialogState, setDialogState] = useState({
    open: false,
    email: "",
  })


  // const handleSubmit = (event: React.FormEvent) => {
  const handleSubmit = (values: ILoginForm) => {
    // event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    .then((userCredential) => {
			setAuth(true); // update user's login status
      history.push('/profile');
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }

      console.log(error);
    });
  };

  const handleDialogOpen = () => {
    setDialogState({
      ...dialogState,
      open: true,
    });
  };

  const handleDialogClose = () => {
    setDialogState({
      ...dialogState,
      open: false,
    });
  };

  const handleDialogEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogState({
      ...dialogState,
      email: event.target.value,
    });
  };

  const handleForgotPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();

    let auth = firebase.auth();
    let emailAddress = dialogState.email;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      alert('An email has been sent to you.');
      handleDialogClose();
    }).catch(function(error) {
      // An error happened.
      alert(error.message);
    });
  };
  
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center'>
        Log in
      </Typography>
      <Button 
        variant='outlined' 
        color='secondary'
        component={RouterLink}
        to='/'
      >
        Home
      </Button>
      <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={(values: ILoginForm) => {
            handleSubmit(values);
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required('Enter valid email'),
            password: Yup.string()
                .required('Please enter your password to log in')
        })}
      >
        {(props: FormikProps<ILoginForm>) => {
            const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
            } = props
            return (
                <Form>
                    <TextField
                        name='email'
                        id='email'
                        value={values.email}
                        type="email"
                        variant="outlined"
                        color='secondary'
                        label="email"
                        onChange={handleChange}
                        // onChange={(event: React.ChangeEvent<{ value: unknown }>) => handleChange('email', event)}
                    />
                    <TextField
                        name='password'
                        id='password'
                        label="password"
                        value={values.password}
                        type="password"
                        variant="outlined"
                        color='secondary'
                        onChange={handleChange}
                        // onChange={(event: React.ChangeEvent<{ value: unknown }>) => handleChange('password', event)}
                    />
                    <Link
                        onClick={handleDialogOpen}
                    >
                        Forgot Your Password?
                    </Link>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        Log in
                    </Button>
                </Form>
            );
        }}
      </Formik>
      <Dialog open={dialogState.open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Forgot your password?</DialogTitle>
        <form onSubmit={handleForgotPassword}>
          <DialogContent>
            <DialogContentText>
              Enter your email and we'll send you a link to reset your password.
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={handleDialogEmail}
            />
          </DialogContent>
          <DialogActions>
            <Button 
                onClick={handleDialogClose} 
                color="primary"
            >
              Cancel
            </Button>
            <Button 
              type='submit' 
              // onClick={handleDialogClose} 
              color="primary"
              // vairant='contained'
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}