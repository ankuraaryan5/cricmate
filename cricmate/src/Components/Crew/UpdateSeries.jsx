import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateSeries() {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("");
  const [seriesData, setSeriesData] = useState({
    _id: "",
    seriesName: "",
    team1: "",
    team2: "",
    matchNumber: "",
    matchType: "",
  });

  const getSeries = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/series");
      setSeries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);

  const handleSelectSeries = async (e) => {
    const seriesId = e.target.value;
    setSelectedSeries(seriesId);
    console.log(seriesId);
    if (seriesId) {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/getSeries/${seriesId}`);
        setSeriesData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching series details:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSeriesData({ ...seriesData, [name]: value });
  };

  const handleSeriesSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/api/v1/updateSeries/${selectedSeries}`, seriesData);
      console.log("Series Updated:", response.data);
    } catch (error) {
      console.error("Error updating series:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <h1 className="text-2xl font-bold">Update Series</h1>
      <div className="flex flex-col gap-4 w-1/2 justify-center items-center">
        <select
          name="series"
          id="series"
          className="p-2 border border-slate-500 rounded-lg"
          value={selectedSeries}
          onChange={handleSelectSeries}
        >
          <option value="">Select Series</option>
          {series.map((s) => (
            <option key={s._id} value={s._id}>
              {s.seriesName}
            </option>
          ))}
        </select>
        {selectedSeries && (
          <form
            action="submit"
            className="p-2 border border-slate-500 rounded-lg flex flex-col gap-2 "
            onSubmit={handleSeriesSubmit}

          >
            <input
              type="text"
              name="seriesName"
              placeholder="Enter Series Name"
              value={seriesData.seriesName}
              onChange={handleInputChange}
              className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              name="team1"
              placeholder="Enter Team 1 Name"
              value={seriesData.team1}
              onChange={handleInputChange}
              className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              name="team2"
              placeholder="Enter Team 2 Name"
              value={seriesData.team2}
              onChange={handleInputChange}
              className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              name="matchNumber"
              placeholder="Enter Match Number"
              value={seriesData.matchNumber}
              onChange={handleInputChange}
              className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              name="matchType"
              placeholder="Enter Match Type"
              value={seriesData.matchType}
              onChange={handleInputChange}
              className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Update Series
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdateSeries;
