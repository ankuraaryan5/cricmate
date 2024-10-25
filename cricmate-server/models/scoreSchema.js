import mongoose from "mongoose";

// Commentary Schema
const commentarySchema = new mongoose.Schema(
    {
        batter1: {
            type: String,
            default: null, // Default to null if not provided
        },
        batter2: {
            type: String,
            default: null, // Default to null if not provided
        },
        bowler: {
            type: String,
            default: null, // Default to null if not provided
        },
        commentary: {
            type: String,
            required: true, // Commentary text is essential
        },
        commentaryBy: {
            type: String,
            default: null, // Default to null if not provided
        },
        overNumber: {
            type: Number,
            default: null, // Default to null if not provided
        },
        ballNumber: {
            type: Number,
            default: null, // Default to null if not provided
        },
        wicket: {
            type: String,
            enum: ["none", "bowled", "caught", "LBW", "run out", "stumped"],
            default: "none", // Default to "none" if no wicket has fallen
        },
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Score Schema
const scoreSchema = new mongoose.Schema(
    {
        team1: {
            type: String,
            required: true, // Team 1 name is essential
        },
        team2: {
            type: String,
            required: true, // Team 2 name is essential
        },
        score: {
            type: String,
            default: "0", // Default to "0" at the start
        },
        innings: {
            type: Number,
            default: 1, // Default to 1 for the first innings
        },
        totalOvers: {
            type: Number,
            default: 0, // Default to 0 until specified
        },
        extras: {
            type: Number,
            default: 0, // Default to 0 unless specified
        },
        commentary: [commentarySchema], // Array of commentary objects
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Indexing for performance
scoreSchema.index({ team1: 1, team2: 1 }); // Compound index for quick retrieval by teams
commentarySchema.index({ overNumber: 1, ballNumber: 1 }); // Index for quick access to specific commentary

// Export the model
export default mongoose.model("Score", scoreSchema);
