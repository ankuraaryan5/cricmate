import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import {  FaCheckCircle } from "react-icons/fa";
import { useDispatch} from "react-redux";

function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
    uType: "user",
    otp: "",
  });
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const dispatch = useDispatch();
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted", data);
    try {
      const response = await axios.post("http://localhost:4000/api/v1/signup", {
        email: data.email,
        password: data.password,
        uType: data.uType,
      });
      console.log("Signup response:", response.data);
      dispatch({user: response.data.user, token: response.data.token});
      setData({ email: "", password: "", uType: "user", otp: "" });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      console.log("Input email and password");
      alert("Input email and password");
      return;
    }
    setShowVerifyEmail(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/sendOtp",
        { email: data.email }
      );
      console.log("OTP sent", response.data);
      alert("OTP sent");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/verify", {
        email: data.email,
        otp: data.otp,
      });
      console.log("OTP verified", response.data);

    } catch (error) {
      alert("Invalid OTP");
      console.error( error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center w-full bg-slate-200">
      <div className="flex justify-start md:justify-center  items-center w-full md:w-1/2 relative h-screen">
        <img src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full absolute" />
        <div className="text-white flex flex-col  gap-2 absolute p-10">
          <h1 className="text-3xl font-bold italic">Welcome to CricMate</h1>
          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Live Score Updates",
                  "Competitive Analysis",
                  "Ball-by-Ball Commentary",
                  "Stats and Insights",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <FaCheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
          
        </div>
      </div>
      <form className="flex flex-col gap-4 items-center justify-center w-full md:w-1/2 py-10 ">
        <h1 className="text-2xl font-bold">SignUp to the exciting experience</h1>
        <div className="flex gap-2 justify-center items-center ">
        <p className="text-lg">Already have an account? </p>
        <Link to="/login"> <p className="text-cyan-600 text-lg font-bold hover:text-orange-800">Login</p></Link>
        </div>
        <input
          type="email"
          className="border border-black p-2 rounded w-11/12"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        {showVerifyEmail && (
          <div className="flex gap-2 w-11/12 ">
            <input
              type="text"
              className="border border-black p-2 rounded w-2/3"
              placeholder="OTP"
              value={data.otp}
              onChange={(e) => setData({ ...data, otp: e.target.value })}
            />
            <button
              type="submit"
              className=" p-2 rounded w-1/3 hover:bg-lime-300 bg-lime-400 hover:text-orange-800 text-white"
              onClick={handleVerifyOtp}
            >
              Verify Email
            </button>
          </div>
        )}

        <input
          type="password"
          className="border border-black p-2 rounded w-11/12"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        {showVerifyEmail ? (
          <button
            type="submit"
            onClick={handleSignup}
            className=" p-2 rounded md:w-1/6 w-1/2 hover:bg-lime-300 bg-lime-400 hover:text-orange-800 text-white"
          >
            Signup
          </button>
        ) : (
          <button
            type="button"
            onClick={handleVerifyEmail}
            className=" p-2 rounded md:w-1/6 w-1/2 hover:bg-lime-300 bg-lime-400 hover:text-orange-800 text-white"
          >
            Send OTP
          </button>
        )}
      </form>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
