import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import './navbarStyle.css';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Learn from './Learn';
import Nearby from './Nearby';
import Evaluate from './Evaluate';
import Login from "../Login";

const App = () => {
  const [res, setRes] = useState("empty");
  const updateRes = (newRes) => { setRes(newRes); };
  console.log(res, "in app.js");

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="learn" element={<Learn />} />
        <Route path="nearby" element={<Nearby />} />
        <Route path="evaluate" element={<Evaluate />} />
      </Routes>
    </Router>
  );
};

export default App;
