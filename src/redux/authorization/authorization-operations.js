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

export const userLoginThunk = createAsyncThunk(
  'authorization/userLogin',
  async (userData, thunkApi) => {
    try {
      const user = await API.userLogin(userData);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogoutThunk = createAsyncThunk('authorization/userLogout', async (_, thunkApi) => {
  const { token } = thunkApi.getState().user;
  try {
    const user = await API.userLogout(token);
    return user;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCurrentUserThunk = createAsyncThunk(
  'authorization/getCurrentUser',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().user;
    try {
      const user = await API.getCurrentUser(token);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
