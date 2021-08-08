import { createSlice } from '@reduxjs/toolkit';

export const UserStore = createSlice({
  name: 'user-store',
  initialState: {
    loginUser: null
  },
  reducers: {
    setLoginUser: (state, e) => {
      state.loginUser = e.payload;
    }
  }
});

export const {
  setLoginUser
} = UserStore.actions;

export default UserStore.reducer;
