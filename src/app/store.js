import { configureStore  } from '@reduxjs/toolkit';
import { authApi } from "../services/authApi"; 
import {calculatorSlice} from "../services/calculatorSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [calculatorSlice.reducerPath]: calculatorSlice.reducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});


