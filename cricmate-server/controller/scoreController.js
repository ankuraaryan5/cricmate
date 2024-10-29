import Score from "../models/scoreSchema.js"; 

export const createScore = async (req, res) => {
  const { matchId, seriesId } = req.body;
  try {
    const existingScore = await Score.findOne({ matchId });
    if (existingScore) {
      return res.status(400).json({ message: "Score already exists for this match." });
    }
    const score = await Score.create({ matchId, seriesId });
    res.status(201).json(score);
  } catch (error) {
    res.status(500).json({ message: "Error creating score entry", error });
  }
};

export const addCommentary = async (req, res) => {
  const { matchId } = req.params;
  const { inning, comment, runsScored, wicket, batter1, batter2, bowler, over, ball } = req.body;
  try {
    const score = await Score.findOne({ matchId });
    if (!score) {
      return res.status(404).json({ message: "Score entry not found for this match." });
    }
    if (inning === 1) {
      if (!score.inning1Commentary) {
        score.inning1Commentary = [];
      }
      score.inning1Commentary.push({ comment, runsScored, wicket, batter1, batter2, bowler, over, ball });
    } else if (inning === 2) {
      if (!score.inning2Commentary) {
        score.inning2Commentary = [];
      }
      score.inning2Commentary.push({ comment, runsScored, wicket, batter1, batter2, bowler, over, ball });
    } else {
      return res.status(400).json({ message: "Invalid inning number. Please use 1 or 2." });
    }
    await score.save();
    res.status(200).json(score);
  } catch (error) {
    res.status(500).json({ message: "Error adding commentary", error });
  }
};


export const getCommentary = async (req, res) => {
  const { matchId, inning } = req.params;
  try {
    const score = await Score.findOne({ matchId });
    if (!score) {
      return res.status(404).json({ message: "Score entry not found for this match." });
    }
    
    let commentary;
    if (inning === '1') {
      commentary = score.inning1Commentary;
    } else if (inning === '2') {
      commentary = score.inning2Commentary;
    } else {
      return res.status(400).json({ message: "Invalid inning number. Please use 1 or 2." });
    }

    res.status(200).json(commentary);
  } catch (error) {
    res.status(500).json({ message: "Error fetching commentary", error });
  }
};
export const updateCommentary = async (req, res) => {
  const { matchId, inning } = req.params;
  const { comment, runsScored, wicket, batter1, batter2, bowler, over, ball } = req.body;

  try {
    const score = await Score.findOne({ matchId });
    if (!score) {
      return res.status(404).json({ message: "Score entry not found for this match." });
    }

    let commentaryArray;
    if (inning === '1') {
      commentaryArray = score.inning1Commentary;
    } else if (inning === '2') {
      commentaryArray = score.inning2Commentary;
    } else {
      return res.status(400).json({ message: "Invalid inning number. Please use 1 or 2." });
    }
    const commentaryIndex = commentaryArray.findIndex(entry => entry.ball === ball);
    if (commentaryIndex === -1) {
      return res.status(404).json({ message: "Commentary entry not found for the specified ball." });
    }
    commentaryArray[commentaryIndex] = { comment, runsScored, wicket, batter1, batter2, bowler, over, ball };
    await score.save();
    res.status(200).json(score);
  } catch (error) {
    res.status(500).json({ message: "Error updating commentary", error });
  }
};
