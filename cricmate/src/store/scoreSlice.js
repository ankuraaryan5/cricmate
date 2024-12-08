import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scoreData: [],
    loading: false,
    error: null,
};

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        getScore: (state, action) => {
            state.scoreData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});