import React, { createContext } from 'react';
import firebase from './firebase';

interface AppContextInterface {
  authenticated: boolean,
};

export const AuthContext = createContext({} as AppContextInterface);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;