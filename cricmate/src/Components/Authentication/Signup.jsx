import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
    uType: "user",
    otp: "",
  });
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
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
      setData({ email: "", password: "", uType: "user", otp: "" });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      console.log("Input email and password");
      return;
    }
    setShowVerifyEmail(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/sendOtp",
        { email: data.email }
      );
      console.log("OTP sent", response.data);
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
      // if (response.data.success) {
      //   setShowVerifyEmail(false);
      // }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
  return (
    <>
      <Navbar />
      <form className="flex flex-col gap-4 items-center justify-center h-96 bg-slate-200">
        <input
          type="email"
          className="border border-black p-2 rounded md:w-1/3 w-11/12"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        {showVerifyEmail && (
          <div className="flex gap-2 w-11/12 md:w-1/3">
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
          className="border border-black p-2 rounded md:w-1/3 w-11/12"
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
      <Footer />
    </>
  );
}

export default Signup;
