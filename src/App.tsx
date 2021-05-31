import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
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
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1',
      light: '#5472d3',
      dark: '#002171',
      contrastText: '#f0f0f0',
    },
    secondary: {
      main: '#a1670d',
      light: '#d69540',
      dark: '#6e3c00',
      contrastText: '#ffffff',
    },
  },
});


function App() {
  const [authenticated, setAuth] = useState<boolean>(false);


  return (
    <ThemeProvider theme={theme}>
      <AuthProvider value={{authenticated}}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route 
              exact 
              path="/login" 
              render={(props) => {
                return <LoginPage {...props} setAuth={setAuth} />;
              }}
            />
            <ProtectedRoute
              exact
              path="/profile"
              render={(props) => {
                return <ProfilePage {...props} setAuth={setAuth} />;
              }}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
