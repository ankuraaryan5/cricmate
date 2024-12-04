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

function App() {
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
