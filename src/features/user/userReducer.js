// 1. write initialState
// 2. call createSlice()
// 3. call createAsyncThunk()
// 4. write extraReducer chon async

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users" , payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAsyncUsers.pending]: (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    },
    [getAsyncUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    [getAsyncUsers.rejected]: (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export default userReducer.reducer;
