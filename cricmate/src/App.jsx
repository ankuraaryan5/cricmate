import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Components/Crew/Dashboard";
import UpdateNews from "./Components/Crew/UpdateNews";
import Store from "./Components/Shop/Store";
import MatchForm from "./Components/Crew/MatchForm";
import ScoreForm from "./Components/Crew/ScoreForm";
import SeriesForm from "./Components/Crew/SeriesForm";
import axios from "axios";
import { getSeries, setLoading, setError } from "./store/seriesSlice";
import {
  getMatch,
  setLoading as setLoadingMatch,
  setError as setErrorMatch,
} from "./store/matchSlice";

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
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchSeriesList();
  }, []);
  const seriesData = useSelector((state) => state.series?.seriesData || []);
  console.log(seriesData);
  const [matchOptions, setMatchOptions] = useState([]);
  useEffect(() => {
    const fetchMatches = async () => {
      if (seriesData.length === 0) return;
      try {
        dispatch(setLoadingMatch(true));
        const allMatches = await Promise.all(
          seriesData.map(async (series) => {
            const response = await axios.get(
              `http://localhost:4000/api/v1/series/${series._id}/allMatches`
            );
            return response.data;
          })
        );
        const flattenedMatches = allMatches.flat();
        console.log(flattenedMatches);
        dispatch(getMatch(flattenedMatches));
        setMatchOptions(flattenedMatches);
      } catch (error) {
        dispatch(setErrorMatch(error.message || "Failed to fetch matches"));
        console.error("Error fetching matches:", error);
      } finally {
        dispatch(setLoadingMatch(false));
      }
    };
    fetchMatches();
  }, [seriesData, dispatch]);
  const matches = useSelector((state) => state.match?.matchData);
  useEffect(() => {
    console.log(matches);
  }, [matches]);

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
  );
}

export default App;
