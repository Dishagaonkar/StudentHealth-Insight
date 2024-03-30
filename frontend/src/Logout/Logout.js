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
    window.location.href = "/";
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <p className="wording">Logout</p>
        <p className="question">Are you sure you want to logout?</p>
          <br />
          <div className={"buttonContainer"}>
            <input
              className={"inputButton"}
              onClick={LogoutClick}
              type="submit"
              value={"Yes, logout."}
            />
          </div>
      </div>
    </div>
  );
};

export default Logout;