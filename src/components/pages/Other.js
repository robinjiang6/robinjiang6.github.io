import React from 'react'
import '../../App.css';
import './Other.css';
import {Link} from 'react-router-dom';

function Other() {
  return (
    <div>
        <div className="temp-other">Also under construction
        <Link to='/secret-ponyo' id="ponyo-link">...unless?</Link>
        </div>
    </div>
  )
}

export default Other