import '../../App.css';
import './Home.css';
import React from 'react';
import ThreeD from '../ThreeD';

function Home() {
    return(
        <div className='home'>
            <div className='home-container'>
                <p className='home-title'>Welcome to my Website</p>
                <ThreeD />
                <p className='home-caption'>A model of one of my 3D designs</p>
            </div>
        </div>
    ); 
}
export default Home;