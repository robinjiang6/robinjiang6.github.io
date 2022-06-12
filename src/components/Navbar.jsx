import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//import logo from '.../public/images/TF logo';<img src = {logo} alt="Logo"/>

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                hello
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar