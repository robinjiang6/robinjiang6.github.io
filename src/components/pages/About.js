import React from 'react';
import '../../App.css';
import './About.css';
function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className = 'about-picture-container'>
          <img src='/images/me-pic-min.png' alt="me graduating-" className="about-picture"></img>
        </div>
        <div className="about-text">Hey there! I’m Robin, the owner of this (hopefully cool) website. I’m currently studying Computer Engineering at UCI, and am a Troy High School alumnus. In my free time I enjoy coding, 3D printing, playing ping pong, and cooking steaks<span className='yummy-emoji'>&#128523;</span>. I’m currently looking for summer 2023 software engineering internships, so wish me luck!
        </div>
      </div>
    </div>
    
  )
}

export default About