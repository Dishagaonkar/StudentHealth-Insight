//source referenced : https://www.youtube.com/watch?v=KZB6gtKQ9_I&t=511s & https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js
//https://blog.logrocket.com/how-to-use-axios-post-requests/ 
import React, { useEffect,useState } from "react";
import "../popup.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = ({ isOpen, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");



  const navigate = useNavigate();

  const LoginClick = async (ev) => {
     ev.preventDefault();
  
     try {
      const response = await axios.post("http://localhost:8000/login", {
       email: email,
       password: password
     });

      //show message for valid login
      if (response.status === 200) {
        setEmailError(response.data.message);
      }

     } catch (error) {
      //show message for invalid login
      console.log(error.response.data);
      setEmailError(error.response.data.message);
     }
    
  };

  // Check if the user has entered a valid email
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
        <p className="wording">Login</p>
        <form onSubmit={LoginClick}>
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
              value={"Login"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
