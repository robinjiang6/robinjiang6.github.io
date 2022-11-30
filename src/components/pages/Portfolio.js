import React from 'react';
import '../../App.css';
import './Portfolio.css';
import {Link} from 'react-router-dom';

function Portfolio() {
  return (
    <div>
        <div className='portfolio'>
            <div className='portfolio-category'>
              Experience
            </div>
            <Link to="/portfolio/peraton" className='portfolio-item'>
              <div className='box-container'>
                  <div className='box-items'>
                    <div className='title-and-description'>
                      <div className='job-title'>Peraton<span className='port-dash'> - </span><span className='job-position'>Facilities Engineering Intern</span></div>
                      <div className='job-description'>I developed my leadership and communication skills, exploring the ten step engineering process and working with a fellow intern to address and present upon real world cables faults from 2016 and 2018.</div>
                    </div>
                    <div className='picture-container'>
                        <img src='/images/artemis-225h.png' alt='Artemis 1, a Peraton owned antenna' className='portfolio-picture' id='peraton-picture'></img>
                      <div className='picture-caption'>One of Peraton's Antennas</div>
                    </div>                
                  </div>
              </div>
            </Link>
            <Link to="/portfolio/discovery-cube" className='portfolio-item'>
              <div className='box-container'>
                  <div className='box-items'>
                    <div className='title-and-description'>
                      <div className='job-title'>Discovery Cube<span className='port-dash'> - </span><span className='job-position'>Volunteer</span></div>
                      <div className='job-description'>I developed my communication and customer service skills here while running exhibits and demonstrations for guests.</div>
                    </div>
                    <div className='picture-container'>
                      <img src='/images/cube-225h.png' alt='The Discovery Cube' className='portfolio-picture' id='cube-picture'></img>
                      <div className='picture-caption' id='cube-picture'>The Discovery Cube</div>
                    </div>                
                  </div>
              </div>
            </Link>
            <div className='portfolio-category'>
              Education
            </div>
            <Link to="/portfolio/uci" className='portfolio-item'>
              <div className='box-container'>
                  <div className='box-items'>
                    <div className='title-and-description'>
                      <div className='job-title'>University of California, Irvine</div>
                      <div className='job-description'>Currently pursuing a bachelor's degree in Computer Engineering here as a UC Regents scholar.</div>
                    </div>
                    <div className='picture-container'>
                      <img src='/images/uci-225h.png' alt='UCI' className='portfolio-picture' id='uci-picture'></img>
                      <div className='picture-caption' id='uci-picture'>Mesa Court Housing at UCI</div>
                    </div>                
                  </div>
              </div>
            </Link>
            <Link to="/portfolio/troy-high-school" className='portfolio-item'>
              <div className='box-container'>
                  <div className='box-items'>
                    <div className='title-and-description'>
                      <div className='job-title'>Troy High School</div>
                      <div className='job-description'>Graduated as valedictorian in 2022.</div>
                    </div>
                    <div className='picture-container'>
                      <img src='/images/troy-225h.png' alt='Troy High School' className='portfolio-picture' id='troy-picture'></img>
                      <div className='picture-caption' id='troy-picture'>Troy High School</div>
                    </div>                
                  </div>
              </div>
            </Link>
        </div>
        <div className='portfolio-bottom-spacer'></div>
    </div>
  )
}

export default Portfolio