import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsSlice.js';
import { filterSlice } from './Filter/filterSlice';
import { authSlice } from './auth/authSlice';

const contactsPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(contactsPersistConfig, authSlice.reducer),
    filter: filterSlice.reducer,
  },

  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
  ],
});
const persistor = persistStore(store);

export { store, persistor };
