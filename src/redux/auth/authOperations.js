import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const token = {
  set(token) {
    console.log('token set');
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    console.log('token unset');
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // Handle Error
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // Handle Error
  }
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    // Handle Error
  }
});
