import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";

const NavBar = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [res, setRes] = useState("empty");

  const updateRes = (newRes) => { setRes(newRes); };
  console.log(res, "in navbar");

  const handleOpenPopUp = () => {
    console.log("clicked");
    setPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false);
  };

  const handleSignUpOpenPopUp = () => {
    setSignUpPopUpOpen(true);
  };

  const handleSignUpClosePopUp = () => {
    setSignUpPopUpOpen(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="profile" style={{ color: 'white', textDecoration: 'none' }} disabled = {res === "empty"}>Profile</Link>
          </li>
          <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          </li>
          <li>
            <Link to="learn" style={{ color: 'white', textDecoration: 'none' }}>Learn</Link>
          </li>
          <li>
            <Link to="nearby" style={{ color: 'white', textDecoration: 'none' }}>Nearby Help</Link>
          </li>
          <li>
            <Link to="evaluate" style={{ color: 'white', textDecoration: 'none' }}>Evaluate</Link>
          </li>
          <li>
            <button onClick={handleOpenPopUp}>Login</button>
          </li>
          <li>
            <button onClick={handleSignUpOpenPopUp}>Sign Up</button>
          </li>
        </ul>
      </nav>
      <Login isOpen={isPopUpOpen} handleClose={handleClosePopUp} updateRes={updateRes} />
      <SignUp isOpen={isSignUpPopUpOpen} handleClose={handleSignUpClosePopUp} />
    </div>
  );
};

export default NavBar;
