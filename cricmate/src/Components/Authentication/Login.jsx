import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate, Link } from 'react-router-dom';
import {  FaCheckCircle } from "react-icons/fa";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/api/v1/login", {
      email: data.email,
      password: data.password
    })
    console.log(response.data)
    if (response.data.success) {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      console.log(response.data.user)
      console.log("Login successful");
      setData({
        email: "",
        password: ""
      }) 
      useNavigate("/")
    }

  }
  return (
    <div>
    <Navbar />
    <div className='flex flex-col md:flex-row justify-center items-center w-full bg-slate-300'>
    <div className='flex flex-col justify-center items-center w-full md:w-1/2 relative h-screen'>
    <img src="https://images.unsplash.com/photo-1708147684485-7d0485087be3?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full absolute" />
        <div className="text-white flex flex-col  gap-2 absolute p-10">
          <h1 className="text-3xl font-bold italic">Welcome Back!</h1>
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
    <form action="submit" className='flex flex-col gap-2 justify-center items-center w-full md:w-1/2 py-10'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <div className="flex gap-2 justify-center items-center ">
        <p className="text-lg">Don't have an account? </p>
        <Link to="/signup"> <p className="text-cyan-600 text-lg font-bold hover:text-orange-800">Join Now</p></Link>
        </div>
      <input type="email" placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} className='bg-slate-200 p-2 rounded w-11/12  border border-black' />
      <input type="password" placeholder='Password' onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password} className='bg-slate-200 p-2 rounded w-11/12 border border-black' />
      <button type="submit" onClick={handleLogin} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2 '>Login</button>
    </form>
    </div>
    <Footer />
    </div>
  )
}

export default Login