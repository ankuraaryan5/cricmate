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
  try {
    const series = await Series.find();
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json(error);
  }
};