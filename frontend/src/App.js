import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import './navbarStyle.css';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Learn from './Learn';
import Nearby from './Nearby';
import Evaluate from './Evaluate';
import Login from './Login';

const App = () => {
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
