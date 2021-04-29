import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context';

export default function ProtectedRoute(props) {
  const { authenticated } = useContext(AuthContext);
  
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}