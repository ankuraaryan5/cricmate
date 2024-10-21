import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Admin/Dashboards";
import LiveCoverage from "./Components/Admin/LiveCoverage";
import UpdateNews from "./Components/Admin/UpdateNews";
import UpdateScore from "./Components/Admin/UpdateScore";
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
        <Route path="/score" element={<UpdateScore/>} />
      </Routes>
    </Router>
    )
}

export default App;
