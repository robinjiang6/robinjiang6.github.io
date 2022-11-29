import React from 'react';
import '../../App.css';
import './PortfolioPage.css';
import BackLink from '../BackLink';
function Uci() {
    return(
        <div className='portfolio-container'>
            <BackLink />
            <div className='portfolio-page-title' id='uci-portfolio-page-title'>
                University of California, Irvine
            </div>
            <div className='portfolio-page-description-container'>
                <div className='portfolio-page-description'>
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/uci-1-400w.jpg' className='portfolio-page-picture'></source>
                        <img src='/images/uci-1.jpg' alt='uci' className='portfolio-page-picture'></img>
                    </picture>
                    UCI, or University of California, Irvine, is where I’m currently pursuing a Bachelor’s degree in Computer Engineering. As a freshman, I look forwards to learning lots more and meeting new people through the years.
                </div>
            </div>
        </div>
    )
}
export default Uci