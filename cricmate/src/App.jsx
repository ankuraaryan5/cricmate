import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Crew/Dashboard";
import UpdateNews from "./Components/Crew/UpdateNews";
import Store from "./Components/Shop/Store";
import MatchForm from "./Components/Crew/MatchForm";
import ScoreForm from "./Components/Crew/ScoreForm";
import SeriesForm from "./Components/Crew/SeriesForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getSeries, setLoading, setError } from "./store/seriesSlice";
import { getMatch } from "./store/matchSlice";

function App() {
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
  const seriesData = useSelector((state) => state.series?.seriesData || []);
  console.log(seriesData);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/series" element={<SeriesForm />} />
        <Route path="/match" element={<MatchForm />} />
        <Route path="/score" element={<ScoreForm />} />
        <Route path="/news" element={<UpdateNews />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
    )
}

export default App;
