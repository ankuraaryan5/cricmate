import React from "react";
import scoreData from "./scoreData.json"; // Adjust the path as necessary

function ScoreCard() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 py-2">
      {scoreData.map((match, index) => (
        <div key={index} className="flex flex-col border border-slate-500 w-1/5 rounded-lg p-2 bg-slate-300 justify-center items-center mb-4">
          <div className="flex gap-5">
            <p>{match.status}</p>
            <p>{match["matchNo."]} {match.matchType}</p> 
            {/* thank you chai aur code */}
            <p>{match.location}</p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col">
              <p>{match.team1.name}</p>
              <p>{match.team1.score}</p>
            </div>
            <div>V/S</div>
            <div>
              <p>{match.team2.name}</p>
              <p>{match.team2.score}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScoreCard;
