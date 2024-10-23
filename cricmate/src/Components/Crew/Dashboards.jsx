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
      <div className="flex">
        <div className="flex w-full gap-4">
          <div className="flex flex-col gap-4 w-1/8">
            <Sidebar />
          </div>
          <div className="flex flex-col gap-4 w-7/8">
            <div className="flex gap-2 w-full justify-center items-start ">
              <UpdateSeries />
              <UpdateMatch />
            </div>
            <UpdateScore />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboards;
