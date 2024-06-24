import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./firstSlice.js";

export default configureStore({
  reducer: {
    first: firstSlice,
  },
});
