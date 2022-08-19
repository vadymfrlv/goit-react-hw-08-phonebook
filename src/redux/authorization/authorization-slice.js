import { createSlice } from '@reduxjs/toolkit';
import {
  userSignUpThunk,
  userLoginThunk,
  userLogoutThunk,
  getCurrentUserThunk,
} from './authorization-operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },

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
      state.email = payload.email;
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
      state.email = payload.email;
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
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },

    [getCurrentUserThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getCurrentUserThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.isLoggedIn = true;
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
