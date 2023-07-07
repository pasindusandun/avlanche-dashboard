import { createSlice } from '@reduxjs/toolkit';


export const userDetailSlice = createSlice({
  name: 'userDetailSlice',
  initialState:{
    userDetials:{}
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetials = action.payload
    },
  },
});

export const { addUser } = userDetailSlice.actions;

export default userDetailSlice.reducer;