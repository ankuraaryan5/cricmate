import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
    seriesName: { type: String, required: true },
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    matchType: { type: String, required: true },
    matchNumber: { type: Number, required: true },

    match: [matchSchema],
});

// Commentary sub-schema
const commentarySchema = new mongoose.Schema(
  {
    inningNumber: { type: Number, default: 1 },
    batter1: { type: String, default: null },
    batter2: { type: String, default: null },
    bowler: { type: String, default: null },
    commentary: { type: String, required: true },
    commentaryBy: { type: String, default: null },
    overNumber: { type: Number, default: null },
    ballNumber: { type: Number, default: null },
    runsScored: { type: Number, default: null },
    wicket: {
      type: String,
      enum: ["none", "bowled", "caught", "LBW", "run out", "stumped"],
      default: "none",
    },
  },
  { timestamps: true }
);

// Main unified schema for Series, Match, Score
const matchSchema = new mongoose.Schema(
  {
    // matchType: { type: String, required: true }, // Test/ODI/T20
    matchNumber: { type: Number, required: true },
    venue: { type: String, required: true }, // Match Information
    city: { type: String, required: true },
    startDate: { type: Date, required: true },
    startTime: { type: String, required: true },
    result: { type: String, default: null },
    toss: { type: String, required: true },
    tossDecision: { type: String, required: true },
    umpire1: { type: String, required: true },
    umpire2: { type: String, required: true },
    umpire3: { type: String, required: true },
    referee: { type: String, required: true },
    manOfTheMatch: { type: String, default: null },
    
    // team1: { type: String, required: true }, // Team Information
    // team2: { type: String, required: true },
    team1Players: { type: [String], required: true, max: 11 }, // Player lists
    team2Players: { type: [String], required: true, max: 11 },
    
    // score: {
    //   team1Score: { type: String, default: "0" }, // Score Information
    //   team2Score: { type: String, default: "0" },
    //   innings: { type: Number, default: 1 },
    //   totalOvers: { type: Number, default: 0 },
    //   extras: { type: Number, default: 0 },
    // },

    commentary: [commentarySchema], // Commentary array

  },
  { timestamps: true }
);

// Indexing for performance
matchSchema.index({ seriesName: 1, matchType: 1, matchNumber: 1 });
commentarySchema.index({ overNumber: 1, ballNumber: 1 });

// Export the unified model
export default mongoose.model("NewSeries", seriesSchema);
