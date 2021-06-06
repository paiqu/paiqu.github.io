import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from "react-router-dom";

// Firebase
import firebase from '../firebase';

// Material UI
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Component
import RegisterForm from '../components/auth/RegisterForm';

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

interface Props {
  setAuth: (auth: boolean) => void;
};

export default function RegisterPage({ setAuth }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <RegisterForm 
        setAuth={setAuth}
      />
    </div>
  );
}