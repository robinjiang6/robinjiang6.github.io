import React from 'react';//, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                hello <img src = '/images/logo.png' alt="Logo" id = 'logo'/>
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar