import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
function MatchForm() {
  const [selectedSeriesId, setSelectedSeriesId] = useState("");
  const [formData, setFormData] = useState({
    seriesId: selectedSeriesId, 
    venue: "",
    city: "",
    startDate: "",
    startTime: "",
    team1Players: [],
    team2Players: [],
    result: "",
    toss: "",
    tossDecision: "",
    manOfTheMatch: "",
    umpire1: "",
    umpire2: "",
    umpire3: "",
    referee: "",
    status: "scheduled",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [seriesList, setSeriesList] = useState([]);

  const series = useSelector((state) => state.series.seriesData);
  useEffect(() => {
    const fetchSeriesList = () => {
      setSeriesList(series);
    };

    fetchSeriesList();
  }, []); 

  
  useEffect(() => {
    if (selectedSeriesId) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        seriesId: selectedSeriesId, 
      }));
    }
  }, [selectedSeriesId]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "team1Players" || name === "team2Players") {
      setFormData({ ...formData, [name]: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSeriesChange = (e) => {
    setSelectedSeriesId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSeriesId) {
      setError("Please select a series before submitting.");
      return;
    }
    setMessage("");
    setError("");
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/series/${selectedSeriesId}/match`,
        {
          ...formData,
        }
      );
      setMessage(response.data.message || "Match added successfully.");
      setFormData({
        venue: "",
        city: "",
        startDate: "",
        startTime: "",
        team1Players: "",
        team2Players: "",
        result: "",
        toss: "",
        tossDecision: "",
        manOfTheMatch: "",
        umpire1: "",
        umpire2: "",
        umpire3: "",
        referee: "",
        status: "scheduled",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  if (error && !seriesList.length)
    return <p className="text-red-500">{error}</p>;
  if (!seriesList.length) return <p>Loading series...</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex w-full">
        <div className="w-1/12">
          <Sidebar />
        </div>
        <div className="w-11/12 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">Create a New Match</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/3">
            <div className="flex flex-col gap-2">
              <label htmlFor="series" className="font-bold">
                Select Series:
              </label>
              <select
                id="series"
                value={selectedSeriesId}
                onChange={handleSeriesChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="" disabled>
                  Choose a series
                </option>
                {seriesList.map((series) => (
                  <option key={series._id} value={series._id}>
                    {`${series.team1} vs ${series.team2}`} (
                    {series.matchType.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Match Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="venue" className="font-bold">
                  Venue:
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="city" className="font-bold">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="startDate" className="font-bold">
                  Start Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="startTime" className="font-bold">
                  Start Time:
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                />
              </div>
            </div>

            {/* Teams and Other Details */}
            <div>
              <label htmlFor="team1Players" className="font-bold">
                Team 1 Players (comma-separated):
              </label>
              <input
                type="text"
                id="team1Players"
                name="team1Players"
                value={formData.team1Players}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
              <label htmlFor="team2Players" className="font-bold">
                Team 2 Players (comma-separated):
              </label>
              <input
                type="text"
                id="team2Players"
                name="team2Players"
                value={formData.team2Players}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="font-bold">
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              >
                <option value="">Select Match Status</option>
                <option value="scheduled">Scheduled</option>
                <option value="live">Live</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Match
            </button>
          </form>
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default MatchForm;
