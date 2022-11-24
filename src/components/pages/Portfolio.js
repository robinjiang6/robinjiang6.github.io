import React from 'react';
import '../../App.css';
import './Portfolio.css';
import {Link} from 'react-router-dom';

function Portfolio() {
  return (
    <div>
        <div className='portfolio'>
            <div className='construction-sign'>
              Construction in progress
            </div>
            <Link to="/portfolio/peraton" className='portfolio-peraton'>
              <div className='box-container'>
                  <div className='box-items'>
                    <div className='title-and-description'>
                      <div className='job-title'>Peraton<span className='port-dash'> - </span><span className='job-position'>Facilities Engineering Intern</span></div>
                      <div className='job-description'>I developed my leadership and communication skills, exploring the ten step engineering process and working with a fellow intern to address and present upon real world cables faults from 2016 and 2018.</div>
                    </div>
                    <div className='picture-container'>
                      <img src='/images/artemis.png' alt='Artemis 1, a Peraton owned antenna' className='portfolio-picture' id='peraton-picture'></img>
                      <div className='picture-caption'>One of Peraton's <a href='https://eyes.nasa.gov/dsn/dsn.html' target="_blank" rel="noreferrer" className='picture-link'>Antennas</a></div>
                    </div>                
                  </div>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Portfolio