import React, { useEffect, useState } from "react";
import "../popup.css";
import "../Logout/Logout.css";
import { Modal, Button } from "react-bootstrap";
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
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="wording">Are you sure you want to logout?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={LogoutClick}>
          Yes, logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Logout;