import React from 'react';
import './BackLink.css';
import {Link, useLocation} from 'react-router-dom';

// intended for use to go back to the parent directory from a given place
function BackLink() {
    let nextLocation = useLocation().pathname;
    let parent = "home";
    if(nextLocation.length !== 1){
        if(nextLocation.lastIndexOf("/") === 0){
            nextLocation = "/";
        }else{
            nextLocation = nextLocation.substring(0, nextLocation.lastIndexOf("/"));
            parent = nextLocation.substring(nextLocation.indexOf("/") + 1);
        }
    }
    
    return(
        < div className='backlink-button-container'>
            <Link to={nextLocation} className="backlink">
                <div className="backlink-button">back to {parent}</div>
            </Link>
        </div>
    );
}
export default BackLink;