import axios from "axios";
import { useState } from "react";

const UpdateScoreForm = ({
  selectedSeriesId,
  selectedMatchIndex,
  setMatchOptions,
}) => {
  const [formData, setFormData] = useState({
    inning: 1,
    batter1: "",
    batter2: "",
    bowler: "",
    over: 1,
    ball: 1,
    runs: 0,
    extras: 0,
    wicket: 0,
    comment: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form data change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

//   The issue likely arises because the values from input fields in React are always treated as strings, even if the input type is number. When you call setFormData to update the state, runs and extras are stored as strings in the state, which causes typeof runs !== "number" or typeof extras !== "number" to evaluate to true.

// Solution
// To ensure runs and extras are treated as numbers, you need to convert the input values to numbers when updating the state. You can achieve this by using the Number() function in your handleChange function.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "runs" || name === "extras" || name === "wicket" || name === "over" || name === "ball" 
        ? Number(value) 
        : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSeriesId || selectedMatchIndex === undefined) {
      setResponseMessage("Please select a series and match.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/series/${selectedSeriesId}/match/${selectedMatchIndex}/score`,
        formData
      );

      if (response.status === 200) {
        setResponseMessage("Score updated successfully!");

        // Update the match data in the frontend without a page reload
        const updatedSeries = response.data.series; // Get the updated series data
        setMatchOptions((prevMatches) => {
          const updatedMatches = [...prevMatches];
          updatedMatches[selectedMatchIndex] =
            updatedSeries.matchData[selectedMatchIndex];
          return updatedMatches;
        });
        setFormData({
          inning: 1,
          batter1: "",
          batter2: "",
          bowler: "",
          over: 1,
          ball: 1,
          runs: 0,
          extras: 0,
          wicket: 0,
          comment: "",
        });
      } else {
        setResponseMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error updating score:", error);
      setResponseMessage("Failed to update score.");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-5/6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full ">
        <div className="flex gap-2 w-full items-center ">
          <label className="">Inning:</label>
          <input
            type="number"
            name="inning"
            value={formData.inning}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />

          <label>Batter 1:</label>
          <input
            type="text"
            name="batter1"
            value={formData.batter1}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />

          <label>Batter 2:</label>
          <input
            type="text"
            name="batter2"
            value={formData.batter2}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />
        </div>
        <div className="flex gap-2 w-full">
          <label>Bowler:</label>
          <input
            type="text"
            name="bowler"
            value={formData.bowler}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />

          <label>Over:</label>
          <input
            type="number"
            name="over"
            value={formData.over}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />

          <label>Ball:</label>
          <input
            type="number"
            name="ball"
            value={formData.ball}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />
        </div>
        <div className="flex gap-2 w-full items-center">
          <label>Runs:</label>
          <input
            type="number"
            name="runs"
            value={formData.runs}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />
          <label>Extras:</label>
          <input
            type="number"
            name="extras"
            value={formData.extras}
            onChange={handleChange}
            className="bg-slate-200 rounded-md p-1"
          />

          <label>Wicket:</label>
          <input
            type="number"
            name="wicket"
            value={formData.wicket}
            onChange={handleChange}
            required
            className="bg-slate-200 rounded-md p-1"
          />

          <label>Comment:</label>
          <input
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="bg-slate-200 rounded-md p-1"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Score
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default UpdateScoreForm;
