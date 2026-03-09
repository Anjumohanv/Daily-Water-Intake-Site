import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddWater from "./pages/AddWater";
import History from "./pages/History";
import Difference from "./pages/Difference";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-water" element={<AddWater />} />
        <Route path="/history" element={<History />} />
        <Route path="/difference" element={<Difference />} />
      </Routes>
    </Router>
  );
}

export default App;