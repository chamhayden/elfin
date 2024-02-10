import React from 'react';
import { createContext } from 'react';

export const initialValue = {
  sidebarOpen: true,
  youtubeurl: null,
  content: {},
  loaded: false,
  loggedIn: false,
  title: 'COMP1531',
  term: '',
  validTerms: [],
  screenWidth: 1000,
  istutor: false,
};

export const Context = createContext(initialValue);
export const useContext = React.useContext;