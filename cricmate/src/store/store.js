import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import seriesSlice from "./seriesSlice.js";
import matchSlice from "./matchSlice.js";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    series: seriesSlice,
    match: matchSlice,
  },
});
