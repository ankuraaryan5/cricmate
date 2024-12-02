import React from "react";
import Navbar from "../Navbar";
import SeriesForm from "./SeriesForm";

function Dashboard() {
    
  return (
    <div className="flex flex-col justify-center items-center bg-black">
      <Navbar />
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
    </div>
  );
}

export default Dashboard;
