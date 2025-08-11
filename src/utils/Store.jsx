import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice"; 
import ChatSlice from "./chatSlice"; 
const store = configureStore({
  reducer: {
    // your reducers here
    app: AppSlice,
    chat: ChatSlice,
  },
});

export default store;
