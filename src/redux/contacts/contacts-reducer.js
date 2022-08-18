import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { getExistContacts, addContact, deleteContact } from './contacts-operations';

const items = createReducer([], {
  [getExistContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [getExistContacts.pending]: () => true,
  [getExistContacts.rejected]: () => false,
  [getExistContacts.fulfilled]: () => false,

  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
});

const setError = (_, { playload }) => playload;

const error = createReducer(null, {
  [getExistContacts.rejected]: setError,
  [getExistContacts.pending]: () => null,

  [addContact.rejected]: setError,
  [addContact.pending]: () => null,

  [deleteContact.rejected]: setError,
  [deleteContact.pending]: () => null,
});

export const contactsReducer = combineReducers({ items, filter, loading, error });
