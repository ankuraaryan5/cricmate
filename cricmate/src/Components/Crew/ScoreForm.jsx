import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";

function ScoreForm() {
  const [formData, setFormData] = useState({
    inning: "",
    batter1: "",
    batter2: "",
    bowler: "",
    over: "",
    ball: "",
    runs: "",
    wicket: "",
    comment: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const seriesId = "exampleSeriesId"; 
    const matchIndex = "exampleMatchIndex";

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/series/${seriesId}/match/${matchIndex}/score`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Score updated successfully!");
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Failed to update score.");
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
        <h1 className="text-2xl font-bold">Update Score</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full items-center">
            
            <div className="flex gap-2 items-center">
              <label className="text-gray-700 font-bold">Inning:</label>
              <input
                type="number"
                name="inning"
                value={formData.inning}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                min="1"
                required
              />
            
              <label className="text-gray-700 font-bold">Batter 1:</label>
              <input
                type="text"
                name="batter1"
                value={formData.batter1}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                required
              />
            
              <label className="text-gray-700 font-bold">Batter 2:</label>
              <input
                type="text"
                name="batter2"
                value={formData.batter2}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                required
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-gray-700 font-bold">Bowler:</label>
              <input
                type="text"
                name="bowler"
                value={formData.bowler}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                required
              />
            
              <label className="text-gray-700 font-bold">Over:</label>
              <input
                type="number"
                name="over"
                value={formData.over}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                min="0"
                required
              />
            
              <label className="text-gray-700 font-bold">Ball:</label>
              <input
                type="number"
                name="ball"
                value={formData.ball}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                min="1"
                max="6"
                required
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-gray-700 font-bold">Runs:</label>
              <input
                type="number"
                name="runs"
                value={formData.runs}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                min="0"
                required
              />
            
              <label className="text-gray-700 font-bold">Wicket:</label>
              <input
                type="text"
                name="wicket"
                value={formData.wicket}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
                
              />
            
              <label className="text-gray-700 font-bold">Comment</label>
              <input
                type="text"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Update Score
            </button>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-lg font-medium text-gray-700">
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScoreForm;
