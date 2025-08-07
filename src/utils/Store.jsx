import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice"; // Importing the app slice reducer
const store = configureStore({
  reducer: {
    // your reducers here
    app: AppSlice,
  },
});

export default store;
