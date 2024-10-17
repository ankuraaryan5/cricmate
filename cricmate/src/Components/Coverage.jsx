import React, { useState } from 'react';
import scoreData from "./scoreData.json"; // Adjust the path as necessary

function Coverage() {
  const filteredMatches = scoreData.filter(match => match.status === "Live");
  
  // Initialize selectedMatch to the first match if available
  const [selectedMatch, setSelectedMatch] = useState(filteredMatches[0] || null); 

  const showMatchDetails = (match) => {
    setSelectedMatch(match); // Set the selected match
  };

  const closeMatchDetails = () => {
    setSelectedMatch(null); // Close the match details
  };

  return (
    <div className='flex flex-col justify-center items-start gap-1 p-2 bg-pink-200 '>
      <p>Live Coverage</p>
      <div className="flex flex-wrap justify-start items-start gap-2 py-2 w-full">
        {filteredMatches.map((match, index) => (
          <div key={index} className="flex flex-row border border-slate-500 w-1/5 rounded-lg p-2 bg-slate-300 justify-center items-center mb-4">
            <button onClick={() => showMatchDetails(match)}>
              {match.team1.name} vs {match.team2.name}
            </button>
          </div>
        ))}
      </div>

      {/* Match Details Section */}
      {selectedMatch && (
        <div className="border border-slate-500 w-1/3 rounded-lg p-2 bg-slate-200 mt-2">
          <h2 className="text-lg font-bold">{selectedMatch.team1.name} vs {selectedMatch.team2.name}</h2>
          <h3 className="text-md">Match Details</h3>          
          
          <p>match News and updates</p>  
          
          <button onClick={closeMatchDetails} className="mt-2 bg-red-500 text-white p-1 rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Coverage;
