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
  const [emailMessage, setEmailMessage] = useState("");

  const navigate = useNavigate();

  const SignUpClick = async (ev) => {
    ev.preventDefault();

    try {
      await axios.post("http://localhost:8000/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
    } catch (error) {
      //put message stuff in here
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setEmailMessage(data.email))
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);

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
            <input className={"inputButton"} type="submit" value={"Sign Up"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
