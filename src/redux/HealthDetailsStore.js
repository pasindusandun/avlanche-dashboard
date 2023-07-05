import { createSlice } from '@reduxjs/toolkit';

const healthSlice = createSlice({
  name: 'Healthstore',
  initialState:{
    healthDetails:{},
    isOpenDrawer:false,
  
  },
  reducers: {
    addhealthDetails: (state, action) => {
      state.healthDetails = [...action.payload]
    },
    updateOpen:(state,action)=>{
        state.isOpenDrawer = action.payload
    }
  },
});

export const { addhealthDetails,updateOpen } = healthSlice.actions;

export default healthSlice.reducer;