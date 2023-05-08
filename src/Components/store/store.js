import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';

var store = configureStore({
    reducer:{
      auth: authReducer
    }
});
export default store;