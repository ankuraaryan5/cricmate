import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";

function MatchForm() {
  const [formData, setFormData] = useState({
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
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post(`/series/${seriesId}/match`, {
        ...formData,
        team1Players: formData.team1Players.split(",").map((p) => p.trim()),
        team2Players: formData.team2Players.split(",").map((p) => p.trim()),
      });
      setMessage(response.data.message);
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
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex w-full">
        <div className="flex w-1/12">
          <Sidebar />
        </div>
        <div className="flex w-11/12 flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">Create a New Match</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full items-center"
          >
            <div className="flex gap-2 items-center">
              <label htmlFor="venue" className="text-gray-700 font-bold">Venue:</label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="city" className="text-gray-700 font-bold">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="startDate" className="text-gray-700 font-bold">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="startTime" className="text-gray-700 font-bold">Start Time:</label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="result" className="text-gray-700 font-bold">Result:</label>
              <input
                type="text"
                id="result"
                name="result"
                value={formData.result}
                onChange={handleChange}
                
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="toss" className="text-gray-700 font-bold">Toss:</label>
              <input
                type="text"
                id="toss"
                name="toss"
                value={formData.toss}
                onChange={handleChange}
                
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="tossDecision" className="text-gray-700 font-bold">Toss Decision:</label>
              <input
                type="text"
                id="tossDecision"
                name="tossDecision"
                value={formData.tossDecision}
                onChange={handleChange}
                
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="manOfTheMatch" className="text-gray-700 font-bold">Man of the Match:</label>
              <input
                type="text"
                id="manOfTheMatch"
                name="manOfTheMatch"
                value={formData.manOfTheMatch}
                onChange={handleChange}
                
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="umpire1" className="text-gray-700 font-bold">Umpire 1:</label>
              <input
                type="text"
                id="umpire1"
                name="umpire1"
                value={formData.umpire1}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="umpire2" className="text-gray-700 font-bold">Umpire 2:</label>
              <input
                type="text"
                id="umpire2"
                name="umpire2"
                value={formData.umpire2}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="umpire3" className="text-gray-700 font-bold">Umpire 3:</label>
              <input
                type="text"
                id="umpire3"
                name="umpire3"
                value={formData.umpire3}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="referee" className="text-gray-700 font-bold">Referee:</label>
              <input
                type="text"
                id="referee"
                name="referee"
                value={formData.referee}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="team1Players" className="text-gray-700 font-bold">
                Team 1 Players (comma-separated):
              </label>
              <input
                type="text"
                id="team1Players"
                name="team1Players"
                value={formData.team1Players}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1"
              />

              <label htmlFor="team2Players" className="text-gray-700 font-bold">
                Team 2 Players (comma-separated):
              </label>
              <input
                type="text"
                id="team2Players"
                name="team2Players"
                value={formData.team2Players}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
              Add Match
            </button>
          </form>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default MatchForm;
