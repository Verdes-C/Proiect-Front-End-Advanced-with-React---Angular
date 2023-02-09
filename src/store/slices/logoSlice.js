import { createSlice } from '@reduxjs/toolkit';

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    _id: '63cd5e47394d50ffe246e526',
    name: 'Header-logo',
    src: 'https://firebasestorage.googleapis.com/v0/b/proiect-react-283c4.appspot.com/o/Header%2Flogo%2FAdravia-logo-white.png?alt=media&token=417ad801-206d-4a60-8b4a-fab927c0fcdb',
    __v: 0,
  },
  reducers: {
    newLogo(state, action) {
      state = state.payload;
    },
  },
});

export const { newLogo } = logoSlice.actions;
export const logoReducer = logoSlice.reducer;
