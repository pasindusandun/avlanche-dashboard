import { configureStore } from '@reduxjs/toolkit';
import  healthSlice  from './HealthDetailsStore';
import userDetailSlice from "./UserDetailsStore";


const Store = configureStore({
    reducer:{
        HealthStore: healthSlice,
        UserStore:userDetailSlice
    },
 
});

export default Store;