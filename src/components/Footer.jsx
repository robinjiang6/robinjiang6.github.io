import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer'>
          <div className="links">
            <a href="https://github.com/robinjiang6" target="_blank" rel="noreferrer" className="github-container">
              <img src="/images/github-64.png" alt="Github Logo-" id="github-img"></img>
              <text className="github-text">My Github</text>
            </a>
            <a href="https://www.linkedin.com/in/robin-jiang-805249202/" target="_blank" rel="noreferrer" className="linked-in-container">
              <img src="/images/linked-in-64.png" alt="Linked In Logo-" id="linked-in-img"></img>
              <text className="linkedin-text">My LinkedIn</text>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer