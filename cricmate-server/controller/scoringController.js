import {NewSeries} from "../models/scoringSchema.js";

export const newSeries = async (req, res) => {
    const { seriesName, team1, team2, matchType, matchNumber } = req.body;
    try {
        const series = await NewSeries.create({
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
}

export const getSeries = async (req, res) => {
    const { id } = req.query;
    try {
        if (id) {
            const series = await NewSeries.findById(id);
            if (!series) {
                return res.status(404).json({ message: "Series not found" });
            }
            return res.status(200).json(series);
        } else {
            const series = await NewSeries.find();
            return res.status(200).json(series);
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching series", error });
    }
}

export const updateSeries = async (req, res) => {
    const { id } = req.params;
    const { seriesName, team1, team2, matchType, matchNumber } = req.body;
    try {
        const series = await NewSeries.findByIdAndUpdate(
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
}

export const newMatch = async (req, res) => {
    const { venue, city, startDate, startTime, result, toss, tossDecision, seriesId, team1Players, team2Players, manOfTheMatch, umpire1, umpire2, umpire3, referee } = req.body;
    try {
        const series = await NewSeries.findById(seriesId);
        if (!series) {
            return res.status(404).json({ message: "Series not found" });
        }
        const match = await series.matches.create({
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
}

export const getMatch = async (req, res) => {
    const { id } = req.query;
    try {
        if (id) {
            const match = await NewSeries.matches.findById(id);
            if (!match) {
                return res.status(404).json({ message: "Match not found" });
            }
            return res.status(200).json(match);
        } else {
            const match = await NewSeries.matches.find();
            return res.status(200).json(match);
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching match", error });
    }
}

export const updateMatch = async (req, res) => {
    const { id } = req.params;
    const { venue, city, startDate, startTime, result, toss, tossDecision, seriesId, team1Players, team2Players, manOfTheMatch, umpire1, umpire2, umpire3, referee } = req.body;
    try {
        const match = await NewSeries.matches.findByIdAndUpdate(
            id,
            { venue, city, startDate, startTime, result, toss, tossDecision, seriesId, team1Players, team2Players, manOfTheMatch, umpire1, umpire2, umpire3, referee },
            { new: true }
        );
        if (!match) {
            console.log("No match found with that ID");
            return res.status(404).json({ message: "Match not found" });
        }
        res.status(200).json(match);
    } catch (error) {
        console.error("Error updating match:", error);
        res.status(500).json({ message: error.message });
    }
}

export const updateScore = async (req, res) => {
    const { id } = req.params;
    const { runsScored, wicket, inningNumber, batter1, batter2, bowler, commentary, commentaryBy, overNumber, ballNumber } = req.body;
    try {
        const match = await NewSeries.matches.findByIdAndUpdate(
            id,
            { runsScored, wicket, inningNumber, batter1, batter2, bowler, commentary, commentaryBy, overNumber, ballNumber },
            { new: true }
        );
        if (!match) {
            console.log("No match found with that ID");
            return res.status(404).json({ message: "Match not found" });
        }
        res.status(200).json(match);
    } catch (error) {
        console.error("Error updating match:", error);
        res.status(500).json({ message: error.message });
    }
}