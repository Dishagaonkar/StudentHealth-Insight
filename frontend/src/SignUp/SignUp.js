//source referenced : https://www.youtube.com/watch?v=KZB6gtKQ9_I&t=511s & https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js
//https://blog.logrocket.com/how-to-use-axios-post-requests/
import React, { useEffect, useState } from "react";
import "../popup.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../Login";
import { Modal, Button } from "react-bootstrap";


const SignUp = ({ isOpen, handleClose, updateRes, updateInactive }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isInactive, setInactive] = useState(true);
  const [res, setRes] = useState("empty");
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);

  const resetFields = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmailError("");
  };

  const handleOpenPopUp = () => {
    console.log("clicked for login");
    setPopUpOpen(true);
  };

  const handleSignUpClosePopUp = () => {
    resetFields();
    handleClose();
  };

  // const [school, setSchool] = useState("");

  const SignUpClick = async (ev) => {
    ev.preventDefault();

    // Set initial error values to empty
    setEmailError("");
    //console.log(validEmail); //FIXME

    // Check if the user has entered fields correctly
    if ("" === firstName) {
      setEmailError("Please enter your first name");
      return;
    } else if ("" === lastName) {
      setEmailError("Please enter your last name");
      return;
    } else if ("" === email) {
      setEmailError("Please enter your email");
      return;
    } else if ("" === password) {
      setEmailError("Please enter your password");
      return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:8000/signup", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        //show message for valid login
        if (response.status === 200) {
          setEmailError("Profile added successfully! Go login!");
        }
      } catch (error) {
        //show message for invalid login
        console.log(error.response.data);
        setEmailError(error.response.data.message);
      }
    }
  };

  return (
    <Modal show={isOpen} onHide={handleSignUpClosePopUp}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={SignUpClick}>
          <div className={"inputContainer"}>
            <input
              value={firstName}
              placeholder="Enter your first name here"
              onChange={(ev) => setFirstName(ev.target.value)}
              className={"inputBox"}
            />
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={lastName}
              placeholder="Enter your last name here"
              onChange={(ev) => setLastName(ev.target.value)}
              className={"inputBox"}
            />
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={"inputBox"}
            />
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className={"inputBox"}
              type="password"
            />
          </div>
          <br />

          <div className={"buttonContainer"}>
            <Button variant='secondary' onClick={SignUpClick}>Sign Up</Button>
            <label className="errorLabel">{emailError}</label>
          </div>
        </form>
      </Modal.Body>
      {/* <Login isOpen={isPopUpOpen} handleClose={handleSignUpClosePopUp} updateRes={updateRes} updateInactive={updateInactive} /> */}
    </Modal>
  );
};

export default SignUp;
