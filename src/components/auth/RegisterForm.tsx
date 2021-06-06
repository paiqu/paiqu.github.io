import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from "react-router-dom";

// firebase
import firebase, { db, userConverter } from '../../firebase';

// Material UI
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Link from "@material-ui/core/Link";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

// Formik
import { Formik, Form, FormikProps, Field } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: "100%",
  }
}));

interface RegisterFormProps {
  setAuth: (auth: boolean) => void,
};

interface IRegisterForm {
  email: string,
  password: string,
  first: string,
  last: string,
  birthday: Date,
};

export default function RegisterForm({ setAuth }: RegisterFormProps) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const handleRegister = ({
    email,
    password,
    first,
    last,
    birthday
  }: IRegisterForm) => {
    console.log('clicked');

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // save the new user to database
      db.collection('users')
        .withConverter(userConverter)
        .add({
          email,
          first,
          last,
          birthday,
        })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

			setAuth(true); // update user's login status
      history.push('/profile');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h1" color='primary'>
        Register
      </Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
          first: '',
          last: '',
          birthday: new Date(),
        }}
        onSubmit={(values: IRegisterForm) => {
          handleRegister(values);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Enter valid email'),
          password: Yup.string()
            .required('Please enter your password to register'),
          first: Yup.string()
            .required('Please enter your first name'),
          last: Yup.string()
            .required('Please enter your last name'),
          birthday: Yup.date()
            .max(new Date())
            .required('Please enter your birthday')
        })}
      >
          {(props: FormikProps<IRegisterForm>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;

            return (
              <Form className={classes.form}>
                <Grid container spacing={2} style={{width: "60%"}}>
                  <Grid item xs={12}>
                    <TextField
                      name='email'
                      id='email'
                      value={values.email}
                      type="email"
                      variant="outlined"
                      color='secondary'
                      label="email"
                      onChange={handleChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='password'
                      id='password'
                      label="password"
                      value={values.password}
                      type="password"
                      variant="outlined"
                      color='secondary'
                      onChange={handleChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='first'
                      id='firstname'
                      label="First Name"
                      value={values.first}
                      type="text"
                      variant="outlined"
                      color='primary'
                      onChange={handleChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='last'
                      id='lastname'
                      label="Last Name"
                      value={values.last}
                      type="text"
                      variant="outlined"
                      color='secondary'
                      onChange={handleChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='birthday'
                      id='birthday'
                      label="Your Birthday"
                      value={values.birthday}
                      type="date"
                      variant="outlined"
                      color='secondary'
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }} 
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{
                        width: '100%'
                      }}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>

              </Form>
            );
          }}
      </Formik>
    </div>
  );
}