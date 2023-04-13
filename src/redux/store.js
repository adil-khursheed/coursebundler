import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { subscriptionReducer } from './reducers/subscriptionReducer';
import { adminReducer } from './reducers/adminReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = 'https://coursebundlerapi.vercel.app/api/v1';
