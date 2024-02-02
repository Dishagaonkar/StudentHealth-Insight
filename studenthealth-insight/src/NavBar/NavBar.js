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
            <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="learn">Learn</Link>
        </li>
        <li>
          <Link to="nearby">Nearby Help</Link>
        </li>
        <li>
          <Link to="evaluate">Evaluate</Link>
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