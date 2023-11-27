import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfBanana: 10,
};

const bananaReducer = createSlice({
  name: "banana",
  initialState,
  reducers: {
    buyBanana: (state) => {
      state.numOfBanana = state.numOfBanana - 1;
    },
  },
});

export const { buyBanana } = bananaReducer.actions;

export default bananaReducer.reducer;
