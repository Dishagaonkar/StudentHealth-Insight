import React from 'react';
import '../popup.css';

const Login = ({ isOpen, handleClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <p>Login pop-up (under construction)</p>
      </div>
    </div>
  );
};

export default Login;