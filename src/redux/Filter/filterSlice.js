import { createReducer, createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contact/changeFilter');

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     changeFilter: (_, { payload }) => payload,
//   },
// });
