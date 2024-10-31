import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Crew/Dashboards";
import LiveCoverage from "./Components/Crew/LiveCoverage";
import UpdateNews from "./Components/Crew/UpdateNews";
import UpdateScore from "./Components/Crew/UpdateScore";
import Store from "./Components/Shop/Store";
import CreateSeries from "./Components/Crew/CreateSeries";

function App() {
  useSelector((state) => state);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commentary" element={<LiveCoverage />} />
        <Route path="/news" element={<UpdateNews />} />
        <Route path="/series" element={<CreateSeries />} />
        <Route path="/store" element={<Store />} />
        <Route path="/dashboard/:id" element={<UpdateScore />} />
      </Routes>
    </Router>
    )
}

export default App;
