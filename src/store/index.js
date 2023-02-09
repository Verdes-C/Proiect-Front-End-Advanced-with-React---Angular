import { configureStore } from '@reduxjs/toolkit';
// import { songsReducer, addSong, removeSong } from './slices/songsSlice';
// import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
// import { reset } from './actions';
import { logoReducer, newLogo } from './slices/logoSlice';
import { loginReducer, login, logout, update } from './slices/loginSlice';

const store = configureStore({
  reducer: {
    logo: logoReducer,
    isAuth: loginReducer,
  },
});

export { store, newLogo };
export { login, logout, update };
