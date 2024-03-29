//source referenced : https://www.youtube.com/watch?v=KZB6gtKQ9_I&t=511s & https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js
//https://blog.logrocket.com/how-to-use-axios-post-requests/
import React, { useEffect, useState } from "react";
import "../popup.css";
import "../Logout/Logout.css";
import axios from "axios";

// create res outside of component
let res = "empty";

export const Logout = ({ isOpen, handleClose, updateRes, updateInactive }) => {

  const LogoutClick = async () => {

    //set variables to empty and update inactive and close popup
    updateRes("empty");
    updateInactive(true);
    handleClose();

  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <p className="wording">Logout</p>
          <br />
          <div className={"buttonContainer"}>
            <input
              className={"inputButton"}
              onClick={LogoutClick}
              type="submit"
              value={"Logout"}
            />
          </div>
      </div>
    </div>
  );
};

export default Logout;
