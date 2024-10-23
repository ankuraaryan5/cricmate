import Score from "../models/scoreSchema.js";

export const updateScore = async (req, res) => {
  const { teamScore, battingTeam, lastWicket, status, innings } = req.body;
  try {
    const score = await Score.create({
      teamScore,
      battingTeam,
      lastWicket,
      status,
      innings,
    });
    res.status(201).json(score);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getScore = async (req, res) => {
  try {
    const score = await Score.find();
    res.status(200).json(score);
  } catch (error) {
    res.status(500).json(error);
  }
};
