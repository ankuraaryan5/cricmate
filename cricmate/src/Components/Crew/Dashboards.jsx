import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
function Dashboards() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <div className="flex gap-4">
          <Sidebar />
          <div>
            <h1>Dashboards</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboards;
