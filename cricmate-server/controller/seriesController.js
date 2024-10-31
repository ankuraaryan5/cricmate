import Series from "../models/seriesSchema.js";
export const newSeries = async (req, res) => {
  const { seriesName, team1, team2, matchType, matchNumber } = req.body;
  try {
    const series = await Series.create({
      seriesName,
      team1,
      team2,
      matchType,
      matchNumber,
    });
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getSeries = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      const series = await Series.findById(id);
      if (!series) {
        return res.status(404).json({ message: "Series not found" });
      }
      return res.status(200).json(series);
    } else {
      const series = await Series.find();
      return res.status(200).json(series);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching series", error });
  }
};


export const updateSeries = async (req, res) => {
  const { id } = req.params; 
  console.log("Updating series with ID:", id);
  const { seriesName, team1, team2, matchType, matchNumber } = req.body;
  try {
    const series = await Series.findByIdAndUpdate(
      id,
      { seriesName, team1, team2, matchType, matchNumber },
      { new: true }
    );
    if (!series) {
      console.log("No series found with that ID");
      return res.status(404).json({ message: "Series not found" });
    }
    res.status(200).json(series);
  } catch (error) {
    console.error("Error updating series:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getThisSeries = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      const series = await Series.findById(id);
      if (!series) {
        return res.status(404).json({ message: "Series not found" });
      }
      return res.status(200).json(series);
    } else {
      const series = await Series.find();
      return res.status(200).json(series);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching series", error });
  }
}