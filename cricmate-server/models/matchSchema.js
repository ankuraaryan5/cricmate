import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  venue: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  startTime: {
    type: String,
    default: null,
  },
  result: {
    type: String,
    default: null,
  },
  toss: {
    type: String,
    default: null,
  },
  tossDecision: {
    type: String,
    default: null,
  },
  umpire1: {
    type: String,
    default: null,
  },
  umpire2: {
    type: String,
    default: null,
  },
  umpire3: {
    type: String,
    default: null,
  },
  referee: {
    type: String,
    default: null,
  },
  manOfTheMatch: {
    type: String,
  },
  team1Players: {
    type: Array,
    default: null,
  },
  team2Players: {
    type: Array,
    default: null,
  },
  seriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Series",
    required: true,
  },
  inning1Score: {
    type: Number,
    default: 0,
  },
  inning2Score: {
    type: Number,
    default: 0,
  },
  inning3Score: {
    type: Number,
    default: 0,
  },
  inning4Score: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("match", matchSchema);
