import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      <Link to={"/news"}>UpdateNews</Link>
      <Link to={"/score"}>UpdateScore</Link>
      <Link to={"/commentary"}>Commentary</Link>
    </div>
  );
}

export default Sidebar;
