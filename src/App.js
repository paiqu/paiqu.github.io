import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=004cff&primary.color=FFB300
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa',
      light: '#ffffff',
      dark: '#c7c7c7',
      contrastText: '#000000',
    },
    secondary: {
      main: '#d50000',
      light: '#ff5131',
      dark: '#9b0000',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBFb9zlD7Sql2Li907qyEZeTIgS685JNEg",
    authDomain: "paiqu-8777a.firebaseapp.com",
    databaseURL: "https://paiqu-8777a-default-rtdb.firebaseio.com",
    projectId: "paiqu-8777a",
    storageBucket: "paiqu-8777a.appspot.com",
    messagingSenderId: "278994291238",
    appId: "1:278994291238:web:81233e678f157d468434e7",
    measurementId: "G-1GJ8J5BHH8"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }



  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
