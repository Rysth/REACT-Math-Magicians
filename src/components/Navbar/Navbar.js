import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar ">
      <div className="navbar-system container">
        <div className="navbar-left">
          <h1 className="title">Math Magicians</h1>
          <h2 className="subtitle">John Palacios</h2>
        </div>
        <nav className="navbar-right">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item separator">|</li>
            <li className="navbar-item">
              <Link to="/calculator" className="navbar-link">
                Calculator
              </Link>
            </li>
            <li className="navbar-item separator">|</li>
            <li className="navbar-item">
              <Link to="/quote" className="navbar-link">
                Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
