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
    
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
        setShowVerifyEmail(true);
    }
    try {
      const response = await axios.post("http://localhost:4000/api/signup", data);
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
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
          <input
            type="text"
            className="border border-black p-2 rounded md:w-1/3 w-11/12"
            placeholder="OTP"
            value={data.otp}
            onChange={(e) => setData({ ...data, otp: e.target.value })}
          />
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
            Verify Email
          </button>
        )}
      </form>
      <Footer />
    </>
  );
}

export default Signup;
