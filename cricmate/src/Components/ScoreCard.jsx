import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function ScoreCard() {
  const seriesData = useSelector((state) => state.series?.seriesData || []);
  const matches = useSelector((state) => state.match?.matchData || []);

  const getScore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/series/match/score`
      );
      console.log("Score Data:", response.data);
    } catch (error) {
      console.error("Error fetching score:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 py-4 px-2 w-full">
      {seriesData.map((series) => (
        <div
          key={series._id}
          className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/4"
        >
          
          <div className="p-4 border border-gray-300 rounded-md bg-white">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-center">
                <p className="font-bold">{series.team1}</p>
              </div>
              <div className="font-bold text-xl">V/S</div>
              <div className="flex flex-col text-center">
                <p className="font-bold">{series.team2}</p>
              </div>
            </div>
          {matches
            .filter((match) => match.seriesId === series._id)
            .map((match) => (
              <div
                key={match._id}
                className="flex-shrink-0 border border-slate-500 rounded-lg p-4 bg-slate-300 w-full"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">{match.city}</p>
                  <p className="text-sm text-gray-600">{match.venue}</p>
                  <p className="text-sm">{match.status}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  <p>
                    Start Time: {new Date(match.startTime).toLocaleTimeString()}
                  </p>
                  <p>
                    Start Date: {new Date(match.startDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScoreCard;
