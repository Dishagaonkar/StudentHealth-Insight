import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Login from "../Login";
import SignUp from "../SignUp";
import Profile from "../Profile";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const NavBar = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [res, setRes] = useState("empty");
  const [isInactive, setInactive] = useState(true);

  const updateRes = (newRes) => {
    setRes(newRes);
  };
  const data = {
    id: res._id,
    firstName: res.firstName,
    lastName: res.lastName,
    email: res.email,
    password: res.password,
    school: res.school,
  };

  const updateInactive = (temp) => {
    setInactive(temp);
  };

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
    <Navbar variant="light" expand="lg" style={{backgroundColor:'#9ec8d6', minHeight:'50px'}}>
      <Navbar.Brand style={{marginLeft:'10px'}} as={Link} to="/">StudentHealth Insight</Navbar.Brand>
      <Navbar.Toggle style={{marginRight:'10px'}}aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{marginLeft:'10px'}}>
          <Nav.Link as={Link} to={"profile"} state={{ data }} onClick={(e) => {
            if (isInactive) {
              e.preventDefault();
              console.log(data);
              console.log("is inactive profile");
            }
          }}>Profile</Nav.Link>
          <Nav.Link as={Link} to="learn">Learn</Nav.Link>
          <Nav.Link as={Link} to="nearby">Nearby Help</Nav.Link>
          <Nav.Link as={Link} to="evaluate">Evaluate</Nav.Link>
        </Nav>
        <Nav style={{marginLeft:'10px', marginRight:'10px'}}>
          <Button variant="secondary" style={{marginRight:'10px', float:'right', marginBottom:'5px', marginTop:'5px'}} onClick={(e) => {
            if (isInactive) {
              handleOpenPopUp();
            }
          }}>Login</Button>
          <Button variant="secondary" style={{marginRight:'10px', float:'right', marginBottom:'5px', marginTop: '5px'}} onClick={(e) => {
            if (isInactive) {
              handleSignUpOpenPopUp();
            }
          }}>Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
      <Login
        isOpen={isPopUpOpen}
        handleClose={handleClosePopUp}
        updateRes={updateRes}
        updateInactive={updateInactive}
      />
      <SignUp
        isOpen={isSignUpPopUpOpen}
        handleClose={handleSignUpClosePopUp}
        updateRes={updateRes}
        updateInactive={updateInactive}
      />
    </Navbar>
  );
};

export default NavBar;
