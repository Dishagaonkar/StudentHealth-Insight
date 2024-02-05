//source referenced : https://www.youtube.com/watch?v=KZB6gtKQ9_I&t=511s
import React, { useEffect,useState } from "react";
import "../popup.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = ({ isOpen, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    try {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setEmail(data.email))
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);

  const navigate = useNavigate();

  const LoginClick = async(ev) => {
    // do functionality later

    ev.preventDefault()
    try{
      await axios.post("http://localhost:8000/",{
        email,password})
    }
    catch(e){
      console.log(e);
    }


  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <p className="wording">Login</p>
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
          />
        </div>
        <br />
        <div className={"buttonContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={LoginClick}
            value={"Log in"}
          />
        </div>
        <div className={"buttonContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Sign Up"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
