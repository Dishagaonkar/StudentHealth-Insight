import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";

const NavBar = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
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
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="learn">Learn</Link>
          </li>
          <li>
            <Link to="nearby">Nearby Help</Link>
          </li>
          <li>
            <Link to="evaluate">Evaluate</Link>
          </li>
          <li>
            <button onClick={handleOpenPopUp}>Login</button>
          </li>
          <li>
            <button onClick={handleSignUpOpenPopUp}>Sign Up</button>
          </li>
        </ul>
      </nav>
      <Login isOpen={isPopUpOpen} handleClose={handleClosePopUp} />
      <SignUp isOpen={isSignUpPopUpOpen} handleClose={handleSignUpClosePopUp} />
    </div>
  );
};

export default NavBar;
