import React, { useState } from "react";
import axios from "axios";

function UpdateMatch() {
  const [matchDetails, setMatchDetails] = useState({
    venue: "",
    city: "",
    startDate: "",
    startTime: "",
    result: "",
    toss: "",
    tossDecision: "",
    umpire1: "",
    umpire2: "",
    umpire3: "",
    referee: "",
    manOfTheMatch: "",
    team1Players: "",
    team2Players: "",
  });
  const [matchId, setMatchId] = useState(null); // This stores the match ID after creation

  // Create a new match
  const handleMatchCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/newMatch", {
        venue: matchDetails.venue,
        city: matchDetails.city,
        startDate: matchDetails.startDate,
        startTime: matchDetails.startTime,
        result: matchDetails.result,
        toss: matchDetails.toss,
        tossDecision: matchDetails.tossDecision,
        umpire1: matchDetails.umpire1,
        umpire2: matchDetails.umpire2,
        umpire3: matchDetails.umpire3,
        referee: matchDetails.referee,
        manOfTheMatch: matchDetails.manOfTheMatch,
        team1Players: matchDetails.team1Players.split(","), // Convert string to array
        team2Players: matchDetails.team2Players.split(","),
        seriesId: "6718958762fb82c58dcdeb18",
      });
      console.log("Match created successfully:", response.data);
      setMatchId(response.data._id); 
    } catch (error) {
      console.error("Error creating match:", error);
    }
  };

  
  const handleUpdateMatch = async (e) => {
    e.preventDefault();
    if (!matchId) {
      console.error("No match ID found. Please create the match first.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/updateMatch/${matchId}`, // Use match ID for update
        {
          venue: matchDetails.venue,
          city: matchDetails.city,
          startDate: matchDetails.startDate,
          startTime: matchDetails.startTime,
          result: matchDetails.result,
          toss: matchDetails.toss,
          tossDecision: matchDetails.tossDecision,
          umpire1: matchDetails.umpire1,
          umpire2: matchDetails.umpire2,
          umpire3: matchDetails.umpire3,
          referee: matchDetails.referee,
          manOfTheMatch: matchDetails.manOfTheMatch,
          team1Players: matchDetails.team1Players.split(","), // Convert string to array
          team2Players: matchDetails.team2Players.split(","), // Convert string to array
          id: matchId,
        }
      );
      console.log("Match updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating match:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-2">
      <form
        action="submit"
        onSubmit={matchId ? handleUpdateMatch : handleMatchCreate} // Conditionally submit to create or update
        className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full space-y-2"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          {matchId ? "Update Match Details" : "Create a New Match"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter Venue"
            value={matchDetails.venue}
            onChange={(e) => setMatchDetails({ ...matchDetails, venue: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter City"
            value={matchDetails.city}
            onChange={(e) => setMatchDetails({ ...matchDetails, city: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Start Date"
            value={matchDetails.startDate}
            onChange={(e) => setMatchDetails({ ...matchDetails, startDate: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Start Time"
            value={matchDetails.startTime}
            onChange={(e) => setMatchDetails({ ...matchDetails, startTime: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Result"
            value={matchDetails.result}
            onChange={(e) => setMatchDetails({ ...matchDetails, result: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Toss"
            value={matchDetails.toss}
            onChange={(e) => setMatchDetails({ ...matchDetails, toss: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Toss Decision"
            value={matchDetails.tossDecision}
            onChange={(e) => setMatchDetails({ ...matchDetails, tossDecision: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Umpire 1"
            value={matchDetails.umpire1}
            onChange={(e) => setMatchDetails({ ...matchDetails, umpire1: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Umpire 2"
            value={matchDetails.umpire2}
            onChange={(e) => setMatchDetails({ ...matchDetails, umpire2: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Umpire 3"
            value={matchDetails.umpire3}
            onChange={(e) => setMatchDetails({ ...matchDetails, umpire3: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Referee"
            value={matchDetails.referee}
            onChange={(e) => setMatchDetails({ ...matchDetails, referee: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Man Of The Match"
            value={matchDetails.manOfTheMatch}
            onChange={(e) => setMatchDetails({ ...matchDetails, manOfTheMatch: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Team 1 Players (comma-separated)"
            value={matchDetails.team1Players}
            onChange={(e) => setMatchDetails({ ...matchDetails, team1Players: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Team 2 Players (comma-separated)"
            value={matchDetails.team2Players}
            onChange={(e) => setMatchDetails({ ...matchDetails, team2Players: e.target.value })}
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
        >
          {matchId ? "Update Match" : "Create Match"}
        </button>
      </form>
    </div>
  );
}

export default UpdateMatch;
