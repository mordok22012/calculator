import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlices/slices';

export const store = configureStore({
  reducer: {
    calculator : calculatorReducer,
  },
})