import React, { useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getSeries, setLoading, setError } from "../../store/scoreSlice";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSeriesList = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(
          "http://localhost:4000/api/v1/allSeries"
        );
        if (Array.isArray(response.data)) {
          console.log(response.data);
          dispatch(getSeries(response.data));
        } else {
          setError("Unexpected data format received.");
        }
      } catch (err) {
        dispatch(setError(err.message || "Failed to fetch series list"));
        setError(err.response?.data?.message || "Failed to fetch series list");
      }
      finally{
        dispatch(setLoading(false));
      }
    };

    fetchSeriesList();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center bg-black">
      <Navbar />
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
    </div>
  );
}

export default Dashboard;
