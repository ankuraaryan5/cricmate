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
    team1Players: [],
    team2Players: [],
  });

  const handleUpdateMatch = (e) => {
    try {
      const response = axios.post("http://localhost:4000/api/v1/updateMatch", {
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
        team1Players: matchDetails.team1Players,
        team2Players: matchDetails.team2Players,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-2">
      <form
        action="submit"
        onSubmit={handleUpdateMatch}
        className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full space-y-2"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Update Match Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter Venue"
            value={matchDetails.venue}
            onChange={(e) =>
              setMatchData({ ...matchDetails, venue: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter City"
            value={matchDetails.city}
            onChange={(e) =>
              setMatchData({ ...matchDetails, city: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Start Date"
            value={matchDetails.startDate}
            onChange={(e) =>
              setMatchData({ ...matchDetails, startDate: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Start Time"
            value={matchDetails.startTime}
            onChange={(e) =>
              setMatchData({ ...matchDetails, startTime: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Result"
            value={matchDetails.result}
            onChange={(e) =>
              setMatchData({ ...matchDetails, result: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Toss"
            value={matchDetails.toss}
            onChange={(e) =>
              setMatchData({ ...matchDetails, toss: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Toss Decision"
            value={matchDetails.tossDecision}
            onChange={(e) =>
              setMatchData({ ...matchDetails, tossDecision: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Umpire 1"
            value={matchDetails.umpire1}
            onChange={(e) =>
              setMatchData({ ...matchDetails, umpire1: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Umpire 2"
            value={matchDetails.umpire2}
            onChange={(e) =>
              setMatchData({ ...matchDetails, umpire2: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Umpire 3"
            value={matchDetails.umpire3}
            onChange={(e) =>
              setMatchData({ ...matchDetails, umpire3: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Referee"
            value={matchDetails.referee}
            onChange={(e) =>
              setMatchData({ ...matchDetails, referee: e.target.value })
            }
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter Man Of The Match"
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            value={matchDetails.manOfTheMatch}
            onChange={(e) =>
              setMatchData({ ...matchDetails, manOfTheMatch: e.target.value })
            }
          />
          <input
            type=""
            placeholder="Enter Team 1 Players"
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            value={matchDetails.team1Players}
            onChange={(e) =>
              setMatchData({ ...matchDetails, team1Players: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Team 2 Players"
            className="text-center p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
            value={matchDetails.team2Players}
            onChange={(e) =>
              setMatchData({ ...matchDetails, team2Players: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateMatch;
