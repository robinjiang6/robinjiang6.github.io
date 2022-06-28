import React from 'react';
import '../../App.css';
import './ClickMe.css';
function ClickMe() {
  return (
    <div className="click">
      <div className="click-container">
        <p id="nova-text">Well, now that you're here, I'm not sure what to tell you. I was just trying to make a working button. I guess you can enjoy this picture of my friend's dog, Nova !!</p>
        <img src="/images/nova.jpg" alt='nova' id='nova-img'></img>
      </div>
    </div>
  )
}

export default ClickMe