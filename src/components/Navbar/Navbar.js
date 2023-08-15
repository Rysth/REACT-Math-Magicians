import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="title">Math Magicians</h1>
        <h2 className="subtitle">John Palacios</h2>
      </div>
      <nav className="navbar-right">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item separator">|</li>
          <li className="navbar-item">
            <a href="/calculator" className="navbar-link">
              Calculator
            </a>
          </li>
          <li className="navbar-item separator">|</li>
          <li className="navbar-item">
            <a href="/quote" className="navbar-link">
              Quote
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
