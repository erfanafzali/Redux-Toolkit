// 1. call configureStore from redux-toolkit
// 2. write reducer:
// 3. write reducer with item: itemReducer
// 4. export default store

import { configureStore } from "@reduxjs/toolkit";
import appleReducer from "./apple/appleReducer";
import bananaReducer from "./banana/bananaReducer";
import userReducer from "./user/userReducer";

const store = configureStore({
  reducer: {
    apple: appleReducer,
    banana: bananaReducer,
    user: userReducer,
  },
});

export default store;
