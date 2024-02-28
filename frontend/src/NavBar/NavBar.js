import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Login from "../Login";
import SignUp from "../SignUp";

const NavBar = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [res, setRes] = useState("empty");
  const [isInactive, setInactive] = useState(true);

  const updateRes = (newRes) => { setRes(newRes); };
  const data = {
    id:res._id,
    firstName:res.firstName,
    lastName:res.lastName,
    email:res.email,
    password:res.password,
    school:res.school
  }

  const updateInactive = (temp) => {setInactive(temp); };

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
            <Link to={"profile"}state={{ data }}
            onClick={(e) => {
              if (isInactive) {
                e.preventDefault();
              }
            }}
            
            style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
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
            <Button variant="secondary" onClick={handleOpenPopUp}>Login</Button>
          </li>
          <li>
            <Button variant="secondary" onClick={handleSignUpOpenPopUp}>Sign Up</Button>
          </li>
        </ul>
      </nav>
      <Login isOpen={isPopUpOpen} handleClose={handleClosePopUp} updateRes={updateRes} updateInactive={updateInactive} />
      <SignUp isOpen={isSignUpPopUpOpen} handleClose={handleSignUpClosePopUp} />
    </div>
  );
};

export default NavBar;
