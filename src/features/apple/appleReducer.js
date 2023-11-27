// 1. write initialState
// 2. call createSlice from redux-toolkit
// 3. write name product and initialState on createSlice
// 4. immerjs => that allow us to mutate state !! pas niazi be mutate kardan nedarim
// 5. write reducer on createDlice
// 6. write buyApple with arrow function(state , action) dige inja niaz be mutate karden state nedarim
// 7. write action cretors export
// 8. write reducer orginal export default
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfApple: 10,
};

const appleReducer = createSlice({
  name: "apply",
  initialState,
  reducers: {
    buyApple: (state, action) => {
      state.numOfApple = state.numOfApple - action.payload;
    },
    buyTwoApple: (state) => {
      state.numOfApple = state.numOfApple - 2;
    },
  },
});

export const { buyApple, buyTwoApple } = appleReducer.actions;

export default appleReducer.reducer;
