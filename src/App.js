import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/route/ProtectedRoute';
import { AuthProvider } from './context';

// Firebase
import firebase from './firebase';

// Material UI
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

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

  const [authDetails, setAuthDetails] = useState({
    authenticated: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider value={authDetails}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route 
              exact 
              path="/login" 
              render={(props) => {
                return <LoginPage {...props} setAuthDetails={setAuthDetails} />;
              }}
            />
            <ProtectedRoute
              exact
              path="/profile"
              render={(props) => {
                return <ProfilePage {...props} setAuthDetails={setAuthDetails} />;
              }}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
