import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
function UpdateScore() {
  const [data, setData] = useState({
    series: "",
    venue: "",
    city: "",
    matchNumber: "",
    matchType: "",
    status: "",
    innings: "",
    team1: "",
    team2: "",
    team1score: "",
    team2score: "",
    date: "",
    time: "",
    partnership: "",
    lastWicket: "",
    result: "",
    toss: "",
    tossDecision: "",
    umpire1: "",
    umpire2: "",
    umpire3: "",
    referee: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Update score form submitted", data);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/updateScore",
        {
          series: data.series,
          venue: data.venue,
          city: data.city,
          matchNumber: data.matchNumber,
          matchType: data.matchType,
          status: data.status,
          innings: data.innings,
          team1: data.team1,
          team2: data.team2,
          team1score: data.team1score,
          team2score: data.team2score,
          date: data.date,
          time: data.time,
          partnership: data.partnership,
          lastWicket: data.lastWicket,
          result: data.result,
          toss: data.toss,
          tossDecision: data.tossDecision,
          umpire1: data.umpire1,
          umpire2: data.umpire2,
          umpire3: data.umpire3,
          referee: data.referee,
        }
      );
      console.log("Updated score", response.data);
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <input
          type="text"
          placeholder="Enter Series"
          value={data.series}
          onChange={(e) => setData({ ...data, series: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Venue"
          value={data.venue}
          onChange={(e) => setData({ ...data, venue: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter City"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Match Number"
          value={data.matchNumber}
          onChange={(e) => setData({ ...data, matchNumber: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Match Type"
          value={data.matchType}
          onChange={(e) => setData({ ...data, matchType: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Status"
          value={data.status}
          onChange={(e) => setData({ ...data, status: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Innings"
          value={data.innings}
          onChange={(e) => setData({ ...data, innings: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Team 1"
          value={data.team1}
          onChange={(e) => setData({ ...data, team1: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Team 2"
          value={data.team2}
          onChange={(e) => setData({ ...data, team2: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Team 1 Score"
          value={data.team1score}
          onChange={(e) => setData({ ...data, team1score: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Team 2 Score"
          value={data.team2score}
          onChange={(e) => setData({ ...data, team2score: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Date"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Time"
          value={data.time}
          onChange={(e) => setData({ ...data, time: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Partnership"
          value={data.partnership}
          onChange={(e) => setData({ ...data, partnership: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Last Wicket"
          value={data.lastWicket}
          onChange={(e) => setData({ ...data, lastWicket: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Result"
          value={data.result}
          onChange={(e) => setData({ ...data, result: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Toss"
          value={data.toss}
          onChange={(e) => setData({ ...data, toss: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Toss Decision"
          value={data.tossDecision}
          onChange={(e) => setData({ ...data, tossDecision: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Umpire 1"
          value={data.umpire1}
          onChange={(e) => setData({ ...data, umpire1: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Umpire 2"
          value={data.umpire2}
          onChange={(e) => setData({ ...data, umpire2: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Umpire 3"
          value={data.umpire3}
          onChange={(e) => setData({ ...data, umpire3: e.target.value })}
          className="rounded p-1  "
        />
        <input
          type="text"
          placeholder="Enter Referee"
          value={data.referee}
          onChange={(e) => setData({ ...data, referee: e.target.value })}
          className="rounded p-1  "
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateScore;
