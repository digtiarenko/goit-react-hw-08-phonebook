import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state, _) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },

    [refreshCurrentUser.pending](state) {
      state.isLoading = true;
    },

    [refreshCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refreshCurrentUser.rejected](state) {
      state.isLoading = false;
    },
  },
});
