import React, { useState, useEffect } from "react";

import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import UpdateScoreForm from "./UpdateScoreForm";
function ScoreForm() {
  const [seriesOptions, setSeriesOptions] = useState([]);
  const [matchOptions, setMatchOptions] = useState([]);
  const [selectedSeriesId, setSelectedSeriesId] = useState("");
  const [selectedMatchIndex, setSelectedMatchIndex] = useState("");

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/allSeries`
        );
        setSeriesOptions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    fetchSeries();
  }, []);
  useEffect(() => {
    if (selectedSeriesId) {
      const fetchMatches = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/v1/series/${selectedSeriesId}/allMatches`
          );
          console.log(response.data);
          setMatchOptions(response.data);
        } catch (error) {
          console.error("Error fetching matches:", error);
        }
      };
      fetchMatches();
    }
  }, [selectedSeriesId]);

  const handleSeriesChange = (e) => {
    setSelectedSeriesId(e.target.value);
    console.log(e.target.value);
  };

  const handleMatchChange = (e) => {
    setSelectedMatchIndex(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex w-full">
        <div className="w-1/12">
          <Sidebar />
        </div>
        <div className="w-11/12 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Update Score</h1>

          <div className="flex gap-4 items-center w-10/12">
            <label className="text-gray-700 font-bold">Select Series:</label>
            <select
              value={selectedSeriesId}
              onChange={handleSeriesChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              required
            >
              <option value="">Select Series</option>
              {seriesOptions.map((series) => (
                <option key={series._id} value={series._id}>
                  {`${series.team1} vs ${series.team2}`} (
                  {series.matchType.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          {/* Select Match */}
          <div className="flex gap-4 items-center w-10/12">
            <label className="text-gray-700 font-bold">Select Match:</label>
            <select
              value={selectedMatchIndex}
              onChange={handleMatchChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              required
            >
              <option value="">Select Match</option>
              {matchOptions?.map((match, index) => (
                <option key={match._id} value={index}>
                  Match {index + 1}
                </option>
              ))}
            </select>
          </div>
          <UpdateScoreForm
            selectedSeriesId={selectedSeriesId}
            selectedMatchIndex={selectedMatchIndex}
            setMatchOptions={setMatchOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default ScoreForm;