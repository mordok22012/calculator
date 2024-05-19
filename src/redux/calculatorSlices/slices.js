import { createSlice } from '@reduxjs/toolkit'
import * as math from 'mathjs';

const initialState = {
  outputScreen: "0",
  formulaScreen: "",
  result: "",
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    numbers: (state, action) => {
      const appendToScreen = (char) => {
        if (state.outputScreen === "0" && char !== ".") {
          state.outputScreen = char;
        } else if (["+", "-", "*", "/"].includes(state.outputScreen)) {
          state.outputScreen = char;
        } else {
          state.outputScreen += char;
        }
        state.formulaScreen += char;
      };

      const reset = () => {
        state.outputScreen = "0";
        state.formulaScreen = "";   
        state.result = "";
      }

      const handleDecimal = () => {
        if (!state.outputScreen.includes(".")) {
          appendToScreen(action.payload);
        }
      }

      const addNumber = () => {
        appendToScreen(action.payload);
      }

      const handleZero = () => {
        if (state.outputScreen !== "0") {
          appendToScreen(action.payload);
        }
      }

      const handleOperator = (operator) => {
        if (state.formulaScreen.length === 0 && operator !== "-") {
          return; 
        }

        if (["+", "*", "/"].includes(state.formulaScreen.slice(-1))) {
          state.formulaScreen = state.formulaScreen.slice(0, -1) + operator;
        } else if (state.formulaScreen.slice(-1) === "-") {
          if (state.formulaScreen.length > 1 && ["+", "*", "/"].includes(state.formulaScreen.slice(-2, -1))) {
            state.formulaScreen = state.formulaScreen.slice(0, -2) + operator;
          } else {
            appendToScreen(operator);
          }
        } else {
          appendToScreen(operator);
        }
        state.outputScreen = operator;
      }

      const handleSubtract = () => {
        if (state.formulaScreen.length === 0) {
          appendToScreen("-");
        } else {
          const lastChar = state.formulaScreen.slice(-1);
          if (["+", "*", "/"].includes(lastChar)) {
            appendToScreen("-");
          } else if (lastChar !== "-") {
            handleOperator("-");
          }
        }
      };

      const handleEqual = () => {
        try {
          const formula = state.formulaScreen.replace(/x/g, '*');
          state.result = math.evaluate(formula);
          
          state.outputScreen = state.result.toString();
          state.formulaScreen = state.result.toString();
        } catch (error) {
          state.outputScreen = "Error";
        }
      }

      const handlers = {
        '0': handleZero,
        '.': handleDecimal,
        'AC': reset,
        '/': () => handleOperator('/'),
        'x': () => handleOperator('*'),
        '+': () => handleOperator('+'),
        '-': handleSubtract,
        '=': handleEqual,
      }

      if (handlers[action.payload]) {
        handlers[action.payload]();
      } else {
        addNumber();
      }
    },
  },
})


export const { numbers } = calculatorSlice.actions

export default calculatorSlice.reducer
