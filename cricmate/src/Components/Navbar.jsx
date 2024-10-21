import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {useSelector,useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const[loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  })
  const handleLogout = () => {
    dispatch(logout({ user:null , token:null }));
    setLoggedIn(false);
  }
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 text-white bg-slate-800 text-3xl font-bold text-center w-full">
      <div className="flex gap-2 w-full md:w-1/3 items-center md:justify-start justify-between">
        <Link to={"/"}><img src="../../images/Logo.gif" alt="logo " width={40} height={40} /></Link>
        <Link to={"/"}><h1>CricMate</h1></Link>
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-gray-900"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <IoMdClose className="w-7 h-7 text-white" />
          ) : (
            <CiMenuBurger className="w-7 h-7 text-white" />
          )}
        </button>
      </div>
      </div>
      <div className="hidden md:flex gap-2 w-full md:w-1/3 items-center justify-center">
        <button className="text-lg font-normal">Live Matches</button>
        <button className="text-lg font-normal">Recent Updates</button>
        <button className="text-lg font-normal">Recent Results</button>
        <button className="text-lg font-normal">Upcoming Fixtures</button>
      </div>

      <div className="hidden md:flex gap-2 w-full md:w-1/3 items-center md:justify-end justify-around">
        { loggedIn? (
          <>
          <button className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800" onClick={handleLogout}>Logout</button>
          </>
          ):(
            <>
            <button
          type="button"
          className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800"
        >
        <Link to={"/login"}>Login</Link>
          
        </button>
        <button className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800">
          <Link to={"/signup"}>JoinUs</Link>
        </button>
        </>)}
      </div>
      {expanded && (
        <div className="md:hidden flex flex-col gap-2 w-full">
          <div className=" flex flex-col gap-2 w-full ">
          <div className="flex gap-2 w-full items-center justify-center">
            <button className="text-lg font-normal">Live Matches</button>
            <button className="text-lg font-normal">Recent Updates</button>
            </div>
          <div className="flex gap-2 w-full items-center justify-center">
            <button className="text-lg font-normal">Recent Results</button>
            <button className="text-lg font-normal">Upcoming Fixtures</button>
            </div>
          </div>
          <div className="flex gap-2 w-full items-center justify-center">
            <button
              type="button"
              className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800"
            >
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="text-2xl border border-white py-1 px-2 rounded-lg hover:bg-white hover:text-slate-800">
              <Link to={"/signup"}>JoinUs</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
