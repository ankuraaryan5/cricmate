import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchData: [],
  loading: false,
  error: null,
};

const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    getMatch: (state, action) => {
      state.matchData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getMatch, setLoading, setError } = matchSlice.actions;

export default matchSlice.reducer;
