import React from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import OurTeam from "./components/pages/OurTeam";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/ourteam" element={<OurTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
