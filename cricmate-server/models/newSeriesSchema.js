import mongoose from "mongoose";
const newSeriesSchema = new mongoose.Schema(
  {
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    matchType: { type: String, required: true },
    totalMatches: { type: Number, required: true },
    matchData: [
      {
        venue: { type: String, default: null },
        city: { type: String, default: null },
        startDate: { type: Date, default: null },
        startTime: { type: String, default: null },
        result: { type: String, default: "to be decided" },
        toss: { type: String, default: "to be decided" },
        tossDecision: { type: String, default: "not decided" },
        umpire1: { type: String, default: null },
        umpire2: { type: String, default: null },
        umpire3: { type: String, default: null },
        referee: { type: String, default: null },
        manOfTheMatch: { type: String, default: null },
        status: {
          type: String,
          enum: ["Scheduled", "Live", "Completed"],
          default: "Scheduled",
        },
        team1Players: [
          {
            name: { type: String, },
            role: {
              type: String,
              enum: ["Batter", "Bowler", "All-rounder", "Wicket-keeper"], 
            }
          },
        ],
        team2Players: [
          {
            name: { type: String,  },
            role: {
              type: String,
              enum: ["Batter", "Bowler", "All-rounder", "Wicket-keeper"],
            }
          },
        ],
        score: [
          {
            inning: { type: Number, default: 1 },
            batter1: { type: String, default: null },
            batter2: { type: String, default: null },
            bowler: { type: String, default: null },
            over: { type: String, default: 1 },
            ball: { type: String, default: 1 },
            runs: { type: Number, default: 0 },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("newseries", newSeriesSchema);
