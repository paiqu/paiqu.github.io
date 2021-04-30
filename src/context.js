import React, { createContext } from 'react';
import firebase from './firebase';

export const AuthContext = createContext();

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;