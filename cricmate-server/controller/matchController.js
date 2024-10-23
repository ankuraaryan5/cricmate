import Match from "../models/matchSchema.js";

export const newMatch = async (req, res) => {
  const { venue, city, startDate, startTime, result, toss, tossDecision } =
    req.body;
  try {
    const match = await Match.create({
      venue,
      city,
      startDate,
      startTime,
      result,
      toss,
      tossDecision,
    });
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMatch = async (req, res) => {
  try {
    const match = await Match.find();
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json(error);
  }
};
