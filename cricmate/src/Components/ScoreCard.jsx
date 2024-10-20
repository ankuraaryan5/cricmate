import React from "react";
import scoreData from "./scoreData.json"; 

function ScoreCard() {
  return (
    <div className="flex justify-start items-center gap-4 py-4 px-2 overflow-x-scroll scrollbar-hide w-full">
      {scoreData.map((match, index) => (
        <div
          key={index}
          className="flex-shrink-0 border border-slate-500 rounded-lg p-4 bg-slate-300 mb-4 w-full md:w-1/2 lg:w-1/4"          
        >
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
