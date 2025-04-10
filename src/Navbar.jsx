// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Free Robux Generator</h1>
      <ul className="nav-links">
        <li><Link to="/" className="nav-button">Study Timer</Link></li>
        <li><Link to="/about" className="nav-button">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
