//source referenced : https://www.youtube.com/watch?v=KZB6gtKQ9_I&t=511s & https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js
//https://blog.logrocket.com/how-to-use-axios-post-requests/
import React, { useEffect, useState } from "react";
import "../popup.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({ isOpen, handleClose }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const SignUpClick = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        setEmailError(response.data.message);
      }
      setEmailError(response.data.message);
    } catch (error) {
      console.log(error.response.data);
      setEmailError(error.response.data.message);
    }
  };

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    //console.log(validEmail); //FIXME

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <p className="wording">Sign Up</p>
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
            <input
              className={"inputButton"}
              onClick={onButtonClick}
              type="submit"
              value={"Sign Up"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
