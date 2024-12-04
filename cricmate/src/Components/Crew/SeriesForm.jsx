import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { addSeries } from "../../store/scoreSlice";

function SeriesForm() {
  const [formData, setFormData] = useState({
    team1: "",
    team2: "",
    matchType: "",
    totalMatches: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post("http://localhost:4000/api/v1/series", formData);
      setMessage(response.data.message);
      dispatch(addSeries(formData));
      setFormData({ team1: "", team2: "", matchType: "", totalMatches: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex w-full ">
        <div className="flex w-1/12 ">
          <Sidebar />
        </div>
        <div className="flex flex-col justify-center items-center  border border-slate-500 rounded-lg p-4 w-11/12">
          <h2 className="text-2xl font-bold mb-4">Create a New Series</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full items-center"
          >
            <div className="flex gap-2 items-center">
              <label htmlFor="team1" className="text-gray-700 font-bold ">
                Team 1:
              </label>
              <input
                type="text"
                id="team1"
                name="team1"
                value={formData.team1}
                onChange={handleChange}
                required
                className="border border-gray-400 p-1 rounded-md"
              />

              <label htmlFor="team2" className="text-gray-700 font-bold ">
                Team 2:
              </label>
              <input
                type="text"
                id="team2"
                name="team2"
                value={formData.team2}
                onChange={handleChange}
                required
                className="border border-gray-400 p-1 rounded-md"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="matchType" className="text-gray-700 font-bold ">
                Match Type:
              </label>
              <select
                id="matchType"
                name="matchType"
                value={formData.matchType}
                onChange={handleChange}
                required
                className="border border-gray-400 p-1 rounded-md"
              >
                <option value="">Select Match Type</option>
                <option value="T20">T20</option>
                <option value="ODI">ODI</option>
                <option value="Test">Test</option>
              </select>

              <label
                htmlFor="totalMatches"
                className="text-gray-700 font-bold "
              >
                Total Matches:
              </label>
              <input
                type="number"
                id="totalMatches"
                name="totalMatches"
                value={formData.totalMatches}
                onChange={handleChange}
                required
                className="border border-gray-400 p-1 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
            >
              Create Series
            </button>
          </form>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default SeriesForm;
