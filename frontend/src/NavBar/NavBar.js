import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import { LoginClick, res } from "../Login";


let user = "empty";

const NavBar = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);

  const waitingForLogin = async () => {
    await LoginClick();
    console.log(res, "from navbar");
  }

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
            <Link to="profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
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
      <Login isOpen={isPopUpOpen} handleClose={handleClosePopUp} />
      <SignUp isOpen={isSignUpPopUpOpen} handleClose={handleSignUpClosePopUp} />
    </div>
  );
};

export default NavBar;
