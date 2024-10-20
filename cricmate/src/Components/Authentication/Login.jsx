import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

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
    <form action="submit" className='flex flex-col gap-2 h-96 justify-center items-center w-full bg-slate-300'>
      <input type="email" placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} className='bg-slate-200 p-2 rounded w-11/12 md:w-1/3 border border-black' />
      <input type="password" placeholder='Password' onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password} className='bg-slate-200 p-2 rounded w-11/12 md:w-1/3 border border-black' />
      <button type="submit" onClick={handleLogin} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2 md:w-1/6'>Login</button>
    </form>
    <Footer />
    </div>
  )
}

export default Login