import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  outputScreen: "0",
  formulaScreen: "0",
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.outputScreen += 1
    },
    operation: (state) => {
      state.value -= 1
    },
    result: (state) => {
      state.value -= 1
    },
    numbers: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.outputScreen = 0
      state.formulaScreen = 0;

    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = calculatorSlice.actions

export default calculatorSlice.reducer