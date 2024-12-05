import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seriesData:[],
    loading:false,
    error:null,
}

const seriesSlice = createSlice({
    name:"series",
    initialState,
    reducers:{
        addSeries(state,action){
            state.seriesData.push(action.payload);
        },
        deleteSeries(state,action){
            state.seriesData=state.seriesData.filter((series)=>series.id!==action.payload);
        },
        updateSeries(state,action){
            const updatedSeries = action.payload;
            state.seriesData = state.seriesData.map((series) => {
                if (series.id === updatedSeries.id) {
                  return updatedSeries;
                }
                return series;
              });
        },
        deleteSeries(state,action){
            state.seriesData=state.seriesData.filter((series)=>series.id!==action.payload);
        },
        getSeries(state,action){
            state.seriesData=action.payload;
        },
        setLoading(state,action){
            state.loading=action.payload;
        },
        setError(state,action){
            state.error=action.payload;
        },
    }
})

export const {addSeries,deleteSeries,updateSeries,getSeries,setLoading,setError}=seriesSlice.actions;
export default seriesSlice.reducer;