import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateScore() {
  const matchId = useParams().id;
  console.log(matchId);
  const [ballByBall, setBallByBall] = useState({
    battingTeam: "",
    teamScore: "",
    lastWicket: "",
    partnership: "",
    status: "",
    innings: "",
    batter1: "",
    batter2: "",
    bowler: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/createScore",
        {
          teamScore: ballByBall.teamScore,
          battingTeam: ballByBall.battingTeam,
          lastWicket: ballByBall.lastWicket,
          partnership: ballByBall.partnership,
          status: ballByBall.status,
          innings: ballByBall.innings,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getScoreDetails = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/score/${matchId}`);
        console.log(response.data);
        setBallByBall(response.data);
    } catch (error) {
        console.log("Error fetching score details:", error);
        console.error(error);
    }
};

useEffect(() => {
    if (matchId) {
        getScoreDetails(); // Fetch score details when matchId changes
    }
}, [matchId]);


  return (
    <div className="flex flex-col justify-center items-center bg-light py-2 w-full">
      <h2 className="text-center mb-4 text-primary text-3xl font-bold">
        Update Score
      </h2>
      <form
        action="post"
        method="post"
        onChange={handleSubmit}
        className="flex flex-col bg-white shadow-lg p-2 rounded w-full"
      >
        <div>
          <input
            type="text"
            placeholder="Add Batting Team"
            value={ballByBall.battingTeam}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, team1score: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Update Score"
            value={ballByBall.teamScore}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, team2score: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Add Last Wicket"
            value={ballByBall.lastWicket}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, lastWicket: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Add Partnership"
            value={ballByBall.partnership}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, partnership: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Add Status"
            value={ballByBall.status}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, status: e.target.value })
            }
            className="form-control p-3 rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Innings"
            value={ballByBall.innings}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, innings: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Add Batter1"
            value={ballByBall.batter1}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, batter1: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Add Batter2"
            value={ballByBall.batter2}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, batter2: e.target.value })
            }
            className="form-control p-3 rounded"
          />

          <input
            type="text"
            placeholder="Add Bowler"
            value={ballByBall.bowler}
            onChange={(e) =>
              setBallByBall({ ...ballByBall, bowler: e.target.value })
            }
            className="form-control p-3 rounded"
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateScore;
