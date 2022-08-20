import { createSlice } from '@reduxjs/toolkit';
import {
  userSignUpThunk,
  userLoginThunk,
  userLogoutThunk,
  getCurrentUserThunk,
} from './authorization-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  isFetchCurrentUser: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: {
    [userSignUpThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userSignUpThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userSignUpThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },

    [userLoginThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userLoginThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLoginThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },

    [userLogoutThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userLogoutThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLogoutThunk.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.isFetchCurrentUser = false;
    },

    [getCurrentUserThunk.pending]: state => {
      state.loading = true;
      state.error = null;
      state.isFetchCurrentUser = true;
    },
    [getCurrentUserThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isFetchCurrentUser = false;
    },
    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.isFetchCurrentUser = false;
    },
  },
});

export default userSlice.reducer;
