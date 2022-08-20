import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsAPI';

export const getExistContacts = createAsyncThunk(
  'contacts/getExistContacts',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().user;
    try {
      const contacts = await API.getExistContacts(token);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const contact = await API.addContact({ name, number });
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
  try {
    await API.deleteContact(id);
    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
