import Match from "../models/matchSchema.js";
import Series from "../models/seriesSchema.js";

export const newMatch = async (req, res) => {
  const { venue, city, startDate, startTime, result, toss, tossDecision, seriesId, team1Players, team2Players, manOfTheMatch, umpire1, umpire2, umpire3, referee } =
    req.body;
  try {
    const series = await Series.findById(seriesId);
    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }

    const match = await Match.create({
      
      venue,
      city,
      startDate,
      startTime,
      result,
      toss,
      tossDecision,
      seriesId,
      team1Players,
      team2Players,
      manOfTheMatch,
      umpire1,
      umpire2,
      umpire3,
      referee,
    });
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMatch = async (req, res) => {
  try {
    const match = await Match.findById(id);
    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }
    res.status(200).json(match);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const updateMatch = async (req, res) => {
  const { venue, city, startDate, startTime, result, toss, tossDecision, seriesId, team1Players, team2Players, manOfTheMatch, umpire1, umpire2, umpire3, referee,id } = req.body;
  try {
    if (seriesId) {
      const series = await Series.findById(seriesId);
      if (!series) {
        console.log("Series not found");
        return res.status(404).json({ message: "Series not found" });
      }
    }
    const match = await Match.findByIdAndUpdate(
      id,
      {
        venue,
        city,
        startDate,
        startTime,
        result,
        toss,
        tossDecision,
        seriesId,
        team1Players,
        team2Players,
        manOfTheMatch,
        umpire1,
        umpire2,
        umpire3,
        referee,
      },
      { new: true }
    );
    if (!match) {
      console.log("Match not found");
      return res.status(404).json({ message: "Match not found" });
    }
    res.status(200).json(match);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};