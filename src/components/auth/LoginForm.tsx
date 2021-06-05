import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from "react-router-dom";


// Material UI
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Link from "@material-ui/core/Link";

// Formik
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

interface LoginFormProps {
  setAuth: (auth: boolean) => void;
  handleSubmit: (values: ILoginForm) => void;
  handleDialogOpen: () => void,
};

interface ILoginForm {
  email: string,
  password: string
};

export default function LoginForm({ 
  setAuth, 
  handleSubmit,
  handleDialogOpen, 
}: LoginFormProps) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();


  return (
    <div className={classes.root}>
      <Typography variant="h1" color='primary'>
        Login
      </Typography>
      <Button
        onClick={() => {
          history.push('/');
        }}
      >
        Back to home
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
            <Form className={classes.form}>
              <TextField
                name='email'
                id='email'
                value={values.email}
                type="email"
                variant="outlined"
                color='secondary'
                label="email"
                onChange={handleChange}
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
    </div>
  );
}