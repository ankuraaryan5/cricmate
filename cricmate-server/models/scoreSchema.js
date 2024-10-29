import mongoose from "mongoose";

const commentarySchema = new mongoose.Schema({
    inning: {
        type: Number,
        default: 1,
    },
    comment: {
        type: String,
        default: null,
    },
    runsScored: {
        type: Number,
        default: 0,
    },
    wicket: {
        type: Number,
        default: 0,
    },
    batter1: {
        type: String,
        default: null,
    },
    batter2: {
        type: String,
        default: null,
    },
    bowler: {
        type: String,
        default: null,
    },
    over: {
        type: Number,
        default: 1,
    },
    ball: {
        type: Number,
        default: 1,
    },
});

const scoreSchema = new mongoose.Schema({
    matchId: {
        type: String,
        required: true,
    },
    seriesId: {
        type: String,
        required: true,
    },
    inning1Commentary: [commentarySchema],
    inning2Commentary: [commentarySchema],
});

export default mongoose.model("score", scoreSchema);