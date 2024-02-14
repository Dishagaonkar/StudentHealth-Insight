import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';

const NavBar = () => {

  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <div>
    <nav>
      <ul>
        <li>
            <Link to="profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
        </li>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </li>
        <li>
          <Link to="learn" style={{ color: 'white', textDecoration: 'none' }}>Learn</Link>
        </li>
        <li>
          <Link to="nearby" style={{ color: 'white', textDecoration: 'none' }}>Nearby Help</Link>
        </li>
        <li>
          <Link to="evaluate" style={{ color: 'white', textDecoration: 'none' }}>Evaluate</Link>
        </li>
        <li>
            <button onClick={handleOpenPopUp}>Login/Create Account</button>
        </li>
      </ul>
    </nav>
      <Login isOpen={isPopUpOpen} handleClose={handleClosePopUp} />
    </div>
  );
};

export default NavBar;