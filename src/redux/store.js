import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;

export const server = 'https://coursebundlerapi.vercel.app/api/v1';
