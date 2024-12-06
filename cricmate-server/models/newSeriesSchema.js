import mongoose from "mongoose";
const newSeriesSchema = new mongoose.Schema(
  {
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    matchType: { type: String, required: true },
    totalMatches: { type: Number, required: true },
    matchData: [
      {
        seriesId: { type: String, default: null },
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
          default: "Scheduled",
        },
        team1Players: [String],
        team2Players: [String] ,
        score: [
          {
            inning: { type: Number, default: 1 },
            batter1: { type: String, default: null },
            batter2: { type: String, default: null },
            bowler: { type: String, default: null },
            over: { type: String, default: 1 },
            ball: { type: String, default: 1 },
            runs: { type: Number, default: 0 },
            wicket: { type: Number, default: 0 },
            comment: { type: String, default: null },
          },
        ],
        discussions: [
          {
            username: { type: String, required: true },
            message: { type: String, required: true },
            imageURL: { type: String, default: null },
            timestamp: { type: Date, default: Date.now },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("newseries", newSeriesSchema);
