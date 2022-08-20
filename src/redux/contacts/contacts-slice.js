import { createSlice } from '@reduxjs/toolkit';
import { getExistContacts, addContact, deleteContact } from './contacts-operations';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },

  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },

  extraReducers: {
    [getExistContacts.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getExistContacts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getExistContacts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
    [addContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = [...state.items, payload];
    },
    [deleteContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
