import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contacts-reducer';
import contactsReducer from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  logger,
  devTools: process.env.NODE_ENV === 'development',
});
