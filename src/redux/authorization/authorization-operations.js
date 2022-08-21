import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/authorizationAPI';

export const userSignUpThunk = createAsyncThunk('users/userSignUp', async (userData, thunkApi) => {
  try {
    const user = await API.userSignUp(userData);
    return user;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const userLoginThunk = createAsyncThunk('users/userLogin', async (userData, thunkApi) => {
  try {
    const data = await API.userLogin(userData);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const userLogoutThunk = createAsyncThunk('users/userLogout', async (_, thunkApi) => {
  const { token } = thunkApi.getState().user;
  try {
    await API.userLogout(token);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCurrentUserThunk = createAsyncThunk('users/getCurrentUser', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.user.token;

  if (!persistedToken) {
    return thunkApi.rejectWithValue();
  }

  try {
    const data = await API.getCurrentUser(persistedToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
