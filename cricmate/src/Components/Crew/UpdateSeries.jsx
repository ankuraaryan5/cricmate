import React, { useEffect, useState } from "react";
import axios from "axios";

function UpdateSeries() {
  const [seriesData, setSeriesData] = useState({
    _id: "", // Added _id to track if a series exists
    seriesName: "",
    team1: "",
    team2: "",
    matchNumber: "",
    matchType: "",
  });

  const [isUpdating, setIsUpdating] = useState(false); // To differentiate between creating and updating

  // Function to handle form submission (either create or update series)
  const handleSeriesSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) {
      await updateSeriesDetails(); // Call update if updating
    } else {
      await createNewSeries(); // Call create if not updating
    }
  };

  // Function to create a new series
  const createNewSeries = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1/newSeries", {
        seriesName: seriesData.seriesName,
        team1: seriesData.team1,
        team2: seriesData.team2,
        matchNumber: seriesData.matchNumber,
        matchType: seriesData.matchType,
      });
      console.log("Series Created:", response.data);
    } catch (error) {
      console.error("Error creating series:", error);
    }
  };

  // Function to update an existing series
  const updateSeriesDetails = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/updateSeries/${seriesData._id}`, // Update based on _id
        {
          seriesName: seriesData.seriesName,
          team1: seriesData.team1,
          team2: seriesData.team2,
          matchNumber: seriesData.matchNumber,
          matchType: seriesData.matchType,
        }
      );
      console.log("Series Updated:", response.data);
    } catch (error) {
      console.error("Error updating series:", error);
    }
  };
  const getSeriesDetails = async () => {
    const seriesId = "6718958762fb82c58dcdeb18"; 
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/series?id=${seriesId}`);
      console.log(response.data);
      setSeriesData(response.data);
      setIsUpdating(true);
    } catch (error) {
      console.error("Error fetching series details:", error);
    }
  };
  useEffect(() => {
    getSeriesDetails(); 
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-2">
      <form
        action="submit"
        onSubmit={handleSeriesSubmit} // Updated to handle both create and update
        className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full space-y-2"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          {isUpdating ? "Update Series Details" : "Create New Series"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Series Name"
            value={seriesData.seriesName}
            onChange={(e) =>
              setSeriesData({ ...seriesData, seriesName: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Team 1 Name"
            value={seriesData.team1}
            onChange={(e) =>
              setSeriesData({ ...seriesData, team1: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Team 2 Name"
            value={seriesData.team2}
            onChange={(e) =>
              setSeriesData({ ...seriesData, team2: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Match Number"
            value={seriesData.matchNumber}
            onChange={(e) =>
              setSeriesData({ ...seriesData, matchNumber: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Match Type"
            value={seriesData.matchType}
            onChange={(e) =>
              setSeriesData({ ...seriesData, matchType: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
        >
          {isUpdating ? "Update Series" : "Create Series"}
        </button>
      </form>
    </div>
  );
}

export default UpdateSeries;
