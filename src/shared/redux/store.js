import { configureStore } from '@reduxjs/toolkit';
import UserState from './user.store';

export default configureStore({
  reducer: {
    userStore: UserState,
  },
});