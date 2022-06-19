import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom';

function Video() {
  return (
    <div className='video-container'>
        <img src="/videos/ponyo.gif" alt='ponyo gif' id="home-screen"></img>
        <h1 id="text-ponyo">PONYO 
        <Link to='/super-secret-ponyo' id="ponyo2-link"> PONYO</Link> !!!
        </h1>
    </div>
  )
}

export default Video