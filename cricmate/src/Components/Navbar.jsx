import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between p-5 text-white bg-slate-800 text-3xl font-bold text-center">
      <div className="flex gap-1">
        <img src="../../images/Logo.gif" alt="logo " width={40} height={40} />
        <h1>CricMate</h1>
      </div>
      <div className="flex gap-5">
        <button className="text-lg font-normal">Live Matches</button>
        <button className="text-lg font-normal">Recent Updates</button>
        <button className="text-lg font-normal">Recent Results</button>
        <button className="text-lg font-normal">Upcoming Fixtures</button>
      </div>
      <div className="flex gap-5">
        <button
          type="button"
          className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800"
        >
          Login
        </button>
        <button className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800">
          <Link to={"/signup"}>JoinUs</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
