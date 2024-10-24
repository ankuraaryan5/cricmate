import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  venue: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  result: {
    type: String,
  },
  toss: {
    type: String,
    required: true,
  },
  tossDecision: {
    type: String,
    required: true,
  },
  umpire1: {
    type: String,
    required: true,
  },
  umpire2: {
    type: String,
    required: true,
  },
  umpire3: {
    type: String,
    required: true,
  },
  referee: {
    type: String,
    required: true,
  },
  manOfTheMatch: {
    type: String,
  },
  team1Players: {
    type: Array,
    required: true,
  },
  team2Players: {
    type: Array,
    required: true,
  },
  seriesId: { type: mongoose.Schema.Types.ObjectId, ref: "Series", required: true }
});

export default mongoose.model("match", matchSchema);
