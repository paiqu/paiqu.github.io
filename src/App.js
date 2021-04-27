import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
