import Score from "../models/scoreSchema.js"; // Adjust the import path as necessary

// Create a new score entry
export const createScore = async (req, res) => {
    try {
        const newScore = new Score(req.body);
        const savedScore = await newScore.save();
        res.status(201).json(savedScore);
    } catch (error) {
        res.status(500).json({ message: "Error creating score", error: error.message });
    }
};

// Get a score entry by ID
export const getScoreById = async (req, res) => {
  const { id } = req.params; 
  console.log("Fetching score with ID:", id);
  try {
      const score = await Score.findById(id);
      if (!score) {
          console.log("Score not found");
          return res.status(404).json({ message: "Score not found" });
      }
      res.status(200).json(score);
  } catch (error) {
      res.status(500).json({ message: "Error retrieving score", error: error.message });
  }
};


// Update a score entry by ID
export const updateScore = async (req, res) => {
    const { id } = req.params; // Assuming you're passing the ID in the URL
    const updateData = req.body; // The fields to update, sent in the request body

    try {
        const updatedScore = await Score.findByIdAndUpdate(id, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Ensure the updated document complies with the schema
        });

        if (!updatedScore) {
            return res.status(404).json({ message: "Score not found" });
        }
        res.status(200).json(updatedScore);
    } catch (error) {
        res.status(500).json({ message: "Error updating score", error: error.message });
    }
};


