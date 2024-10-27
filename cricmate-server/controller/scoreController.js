import Score from "../models/scoreSchema.js"; // Assuming score.js is the name of your schema file

// Create a new score entry for a match
export const createScore = async (req, res) => {
  const { matchId, seriesId } = req.body;
  
  try {
    // Check if score for the match already exists
    const existingScore = await Score.findOne({ matchId });
    if (existingScore) {
      return res.status(400).json({ message: "Score already exists for this match." });
    }

    // Create a new score document
    const score = await Score.create({ matchId, seriesId });
    res.status(201).json(score);
  } catch (error) {
    res.status(500).json({ message: "Error creating score entry", error });
  }
};


export const addCommentary = async (req, res) => {
    const { matchId } = req.params; 
    const { comment, runsScored, wicket, batter1, batter2, bowler, over, ball } = req.body;
  
    try {
      
      
      const score = await Score.findOne({ matchId });
      
      
      if (!score) {
        return res.status(404).json({ message: "Score entry not found for this match." });
      }
  
      
      const newCommentaryEntry = {
        comment,
        runsScored: runsScored || 0,
        wicket: wicket || 0,
        batter1: batter1 || null,
        batter2: batter2 || null,
        bowler: bowler || null,
        over: over || 1,
        ball: ball || 1,
      };
  
      // Push the new commentary entry into the commentary array within commentary object
      await Score.updateOne(
        { matchId },
        { $push: { "commentary.commentary": newCommentaryEntry } }
      );
  
      // Respond with updated score document
      const updatedScore = await Score.findOne({ matchId });
      res.status(200).json(updatedScore);
    } catch (error) {
      res.status(500).json({ message: "Error adding commentary entry", error });
    }
  };
  

// Fetch commentary for a specific match
export const getCommentary = async (req, res) => {
  const { matchId } = req.params;

  try {
    // Find the score entry for the given match
    const score = await Score.findOne({ matchId });
    if (!score) {
      return res.status(404).json({ message: "Score entry not found for this match." });
    }

    res.status(200).json(score.commentary.commentary);
  } catch (error) {
    res.status(500).json({ message: "Error fetching commentary", error });
  }
};
