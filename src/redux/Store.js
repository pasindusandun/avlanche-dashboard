import { configureStore } from '@reduxjs/toolkit';
import  healthSlice  from './HealthDetailsStore';


const Store = configureStore({
    reducer:{
        HealthStore: healthSlice,
    },
 
});

export default Store;