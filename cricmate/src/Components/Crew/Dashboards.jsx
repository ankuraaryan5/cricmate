import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import UpdateSeries from "./UpdateSeries";
import UpdateMatch from "./UpdateMatch";
import UpdateScore from "./UpdateScore";
function Dashboards() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <div className="flex gap-4">
          <Sidebar />
          <div>
          <div className="flex gap-2 w-full justify-center items-start ">
            <UpdateScore />
            <UpdateSeries />
            <UpdateMatch />
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboards;
