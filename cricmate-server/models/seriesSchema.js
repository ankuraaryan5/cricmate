import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
    seriesName: {
        type: String,
        required: true,
    },
    team1: {
        type: String,
        required: true,
    },
    team2: {
        type: String,
        required: true,
    },
    matchType: {
        type: String,
        required: true,
    },
    matchNumber: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("series", seriesSchema);