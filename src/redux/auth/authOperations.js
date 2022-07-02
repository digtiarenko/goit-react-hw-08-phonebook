import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.response.data.errors);
      return rejectWithValue(error.response);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.statusText);
    }
  },
);

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    // return rejectWithValue(error.response.statusText);
    console.log(error);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // return state
      return thunkAPI.rejectWithValue("Error! You don't have a token");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  },
);
