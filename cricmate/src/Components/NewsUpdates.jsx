import React from 'react';
import scoreData from './scoreData.json'; // Make sure this path is correct

function NewsUpdates() {
  // Filter matches with status "Live"
  const filteredMatches = scoreData.filter(match => match.status === "Live");

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">News Updates</h1>
    <div className="flex justify-center items-start gap-4">
      {filteredMatches.map((match, index) => (
        <div key={index} className="flex flex-col border border-slate-500 w-full rounded-lg p-2 bg-violet-200 justify-start items-start mb-4">
          <h2 className="font-semibold">{match.team1.name} vs {match.team2.name}</h2>
          {/* Map through match news */}
          <div className="flex flex-col">
            {Object.values(match.matchNews).map((newsItem, newsIndex) => (
              <p key={newsIndex} className="text-sm">{newsItem}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default NewsUpdates;
