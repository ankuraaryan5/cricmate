import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    battingTeam: {
        type: String,
        required: true,
    },
    teamScore: {
        type: Number,
        required: true,
    },
    lastWicket: {
        type: Number,
        required: true,
    },
    
    status: {
        type: String,
        // required: true,
    },
    innings: {
        type: Number,
        required: true,
    },
    batter1: {
        type: String,
        required: true,
    },
    batter2: {
        type: String,
        required: true,
    },
    bowler: {
        type: String,
        required: true,
    },
});

export default mongoose.model("score", scoreSchema);