import React from 'react';
import '../../App.css';
import './PortfolioPage.css';
import BackLink from '../BackLink';

function DiscoveryCube() {
    return(
        <div className='portfolio-container'>
            <BackLink />
            <div className='portfolio-page-title'>
                Discovery Cube<span className='portfolio-page-title-dash'> - </span><span className='portfolio-page-position'>Volunteer</span>
            </div>
            <div className='portfolio-page-description-container'>
                <div className='portfolio-page-description'>
                    I was first introduced to the Discovery Cube when I volunteered with my jazz band to play for one of their dinner events in 2019. This was the first time I had ever gone into the Cube, and even saw some of my friends from school volunteering there.
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/cube-1-400w.jpg' className='portfolio-page-picture'></source>
                        <img src='/images/cube-1.jpg' alt='me (right) at the Cube with my jazz band' className='portfolio-page-picture'></img>
                    </picture>
                    <div className='portfolio-page-pic-caption'>Me (right) with the OC Music and Dance Jazz Band after performing</div>
                    Since then, I applied and got accepted to be a regular volunteer at the Cube. As a volunteer, I guided guests through the various science exhibits in the museum and learned to communicate with my fellow volunteers to accommodate influxes of as many as 100 guests. After the pandemic, many of the old volunteers had quit, so as one of the only returning members, I took it upon myself to help mentor new volunteers and help them adjust to working.
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/cube-2-400w.jpg' className='portfolio-page-picture'></source>
                        <img src='/images/cube-2.jpg' alt='me (left) at the Cube volunteering' className='portfolio-page-picture'></img>
                    </picture>
                    <div className='portfolio-page-pic-caption'>Me (left) and some volunteers at ECO mart</div>
                    This is a picture of me and some of the new volunteers I was mentoring making sure the carts and cameras were working at the ecological shopping exhibit.
                </div>
            </div>
        </div>
    )
}
export default DiscoveryCube