import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: JSON.parse(window.sessionStorage.getItem('isAuth')),
  reducers: {
    login(state, action) {
      window.sessionStorage.setItem('isAuth', JSON.stringify(action.payload));
      state = action.payload;
    },
    logout(state, action) {
      window.sessionStorage.setItem(
        'isAuth',
        JSON.stringify({ status: false })
      );
      return { status: false };
    },
    update(state, action) {
      console.log('not implemented');
    },
  },
});

export const { login, logout, update } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
