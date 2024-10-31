import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import Footer from "../Footer";
import UpdateSeries from "./UpdateSeries";

function CreateSeries() {
  const [seriesData, setSeriesData] = useState({
    _id: "",
    seriesName: "",
    team1: "",
    team2: "",
    matchNumber: "",
    matchType: "",
  });
  
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
  

  return (
    <div>
    <Navbar />
    <div className="flex w-full ">
    <div className="flex flex-col gap-4 w-1/8">
    <Sidebar />
    </div>
    <div className="flex  justify-center items-center bg-gray-100 py-2 w-7/8">
      <form
        action="submit"
        onSubmit={createNewSeries}
        className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full space-y-2"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Create New Series
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
          Create Series
        </button>
      </form>
      <div className="flex flex-col gap-4">
        <UpdateSeries />
      </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default CreateSeries;
