import { createSlice } from '@reduxjs/toolkit';

const healthSlice = createSlice({
  name: 'Healthstore',
  initialState: {
    healthDetails: {
      
    },
    isOpenDrawer: false,
    chartDetails:{},
    workoutProgress:0,
  },
  reducers: {
    addhealthDetails: (state, action) => {
      state.healthDetails = {...action.payload}
    },
    updateOpen: (state, action) => {
      state.isOpenDrawer = action.payload
    },
    addChartDetails:(state,action)=>{
      state.chartDetails = {...action.payload}
    },
    addworkoutProgress:(state,action)=>{
      state.workoutProgress = action.payload
    }
  },
});

export const { addhealthDetails, updateOpen,addworkoutProgress,addChartDetails } = healthSlice.actions;

export default healthSlice.reducer;