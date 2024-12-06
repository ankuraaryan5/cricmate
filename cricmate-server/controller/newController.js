import NewSeries from "../models/newSeriesSchema.js";

export const createSeries = async (req, res) => {
  try {
    const { team1, team2, matchType, totalMatches } = req.body;
    if (!team1 || !team2 || !matchType || !totalMatches) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided." });
    }
    const newSeries = new NewSeries({
      team1,
      team2,
      matchType,
      totalMatches,
    });

    await newSeries.save();
    res
      .status(201)
      .json({ message: "Series created successfully", series: newSeries });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

export const getAllSeries = async (req, res) => {
  try {
    const series = await NewSeries.find({}, "team1 team2 matchType");
    res.status(200).json(series);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

export const getSeries = async (req, res) => {
  const { seriesId } = req.body;
  try {
    const series = await NewSeries.findById(seriesId);
    res.status(200).json(series);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

export const getAllMatches = async (req, res) => {
  const { seriesId } = req.params;
  try {
    const series = await NewSeries.findById(seriesId);
    res.status(200).json(series.matchData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
export const addMatch = async (req, res) => {
  const {
    seriesId,
    venue,
    city,
    startDate,
    startTime,
    team1Players,
    team2Players,
    result,
    toss,
    tossDecision,
    manOfTheMatch,
    umpire1,
    umpire2,
    umpire3,
    referee,
    status,
  } = req.body;
  try {
    const series = await NewSeries.findById(seriesId);

    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }

    if (series.matchData.length >= series.totalMatches) {
      return res
        .status(400)
        .json({ message: "Cannot add more matches than totalMatches" });
    }

    const newMatch = {
      seriesId,
      venue,
      city,
      startDate,
      startTime,
      team1Players,
      team2Players,
      result,
      toss,
      tossDecision,
      manOfTheMatch,
      umpire1,
      umpire2,
      umpire3,
      referee,
      status,
    };

    series.matchData.push(newMatch);
    await series.save();

    res.status(200).json({
      message: "Match added successfully",
      series,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add match", error });
  }
};

export const getMatch = async (req, res) => {
  try {
    const { seriesId, matchIndex } = req.body;
    const series = await NewSeries.findById(seriesId);
    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }
    const match = series.matchData[matchIndex];
    if (!match) {
      return res.status(404).json({ message: "Match not found in the series" });
    }
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: "Failed to get match", error });
  }
};
// for ball by ball score update
export const updateScore = async (req, res) => {
  try {
    const { seriesId, matchIndex } = req.params; 
    const {
      inning,
      batter1,
      batter2,
      bowler,
      over,
      ball,
      runs,
      wicket,
      comment,
    } = req.body;

    // Validate the input
    if (
      inning < 1 ||
      over < 0 ||
      ball < 1 ||
      ball > 6 ||
      typeof batter1 !== "string" ||
      !batter1.trim() ||
      typeof batter2 !== "string" ||
      !batter2.trim() ||
      typeof bowler !== "string" ||
      !bowler.trim()
    ) {
      return res
        .status(400)
        .json({ message: "Invalid values provided for score update" });
    }

    // Find the series by seriesId
    const series = await NewSeries.findById(seriesId);
    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }
    const match = series.matchData[matchIndex];
    if (!match) {
      return res.status(404).json({ message: "Match not found in the series" });
    }
    const ballScore = {
      inning,
      batter1,
      batter2,
      bowler,
      over,
      ball,
      runs,
      wicket,
      comment,
    };

    // Push the ball score into the match score list
    match.score.push(ballScore);

    // Save the updated series with the new ball entry
    await series.save();

    // Return a success response with the updated series data
    res.status(200).json({
      message: "Score updated successfully",
      series,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update score", error });
  }
};

// Update match details after the match is completed
export const updateMatchDetails = async (req, res) => {
  try {
    const { seriesId, matchIndex } = req.body;
    const {
      result,
      status,
      manOfTheMatch,
      toss,
      tossDecision,
      umpire1,
      umpire2,
      umpire3,
      referee,
    } = req.body;

    const series = await NewSeries.findById(seriesId);

    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }

    if (!series.matchData[matchIndex]) {
      return res.status(404).json({ message: "Match not found in the series" });
    }

    const match = series.matchData[matchIndex];

    match.result = result || match.result;
    match.status = status || match.status;
    match.manOfTheMatch = manOfTheMatch || match.manOfTheMatch;
    match.toss = toss || match.toss;
    match.tossDecision = tossDecision || match.tossDecision;
    match.umpire1 = umpire1 || match.umpire1;
    match.umpire2 = umpire2 || match.umpire2;
    match.umpire3 = umpire3 || match.umpire3;
    match.referee = referee || match.referee;

    await series.save();

    res.status(200).json({
      message: "Match details updated successfully",
      updatedMatch: match,
    });
  } catch (error) {
    console.error("Error updating match details:", error);
    res.status(500).json({
      message: "Failed to update match details",
      error: error.message || error,
    });
  }
};

export const addDiscussion = async (req, res) => {
  try {
    const { seriesId, matchIndex } = req.params;
    const { username, message, imageURL } = req.body;

    if (!username || !message) {
      return res
        .status(400)
        .json({ message: "Username and message are required" });
    }

    const series = await NewSeries.findById(seriesId);
    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }

    const match = series.matchData[matchIndex];
    if (!match) {
      return res.status(404).json({ message: "Match not found in the series" });
    }

    const newDiscussion = {
      username,
      message,
      imageURL,
    };

    match.discussions.push(newDiscussion);
    await series.save();

    res.status(200).json({
      message: "Discussion added successfully",
      discussions: match.discussions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add discussion", error });
  }
};

export const getDiscussions = async (req, res) => {
  try {
    const { seriesId, matchIndex } = req.params;

    const series = await NewSeries.findById(seriesId);
    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }

    const match = series.matchData[matchIndex];
    if (!match) {
      return res.status(404).json({ message: "Match not found in the series" });
    }

    res.status(200).json({
      message: "Discussions retrieved successfully",
      discussions: match.discussions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve discussions", error });
  }
};
