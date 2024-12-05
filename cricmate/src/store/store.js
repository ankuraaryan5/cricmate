import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice.js';
import seriesSlice from './seriesSlice.js';
export const store = configureStore({
    reducer: {
        auth: authSlice,
        series:seriesSlice
    },
})