import React from 'react';
import '../../App.css';
import './PortfolioPage.css';
import BackLink from '../BackLink';
function Troy() {
    return(
        <div className='portfolio-container'>
            <BackLink />
            <div className='portfolio-page-title'>
                Troy High School
            </div>
            <div className='portfolio-page-description-container'>
                <div className='portfolio-page-description'>
                    Troy High School, Fullerton, is where I developed my study skills, work ethic, grit, and communication skills. Many of the teachers here were top notch and genuinely cared for our success. Additionally, I was lucky enough to compete with the nation’s top Science Olympiad team (ours). Here are some memories from Troy:
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/troy-1-400w.jpg' className='portfolio-page-picture'></source>
                        <img src='/images/troy-1.jpg' alt='Me (left) with my AP Physics C teacher and teammates at the end of the year Science Olympiad banquet' className='portfolio-page-picture'></img>
                    </picture>
                    <div className='portfolio-page-pic-caption'>Me (left) with my AP Physics C teacher and teammates at the end of the year Science Olympiad banquet</div>
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/troy-2-400w.jpg' className='portfolio-page-picture'></source>
                        <img src='/images/troy-2.jpg' alt='Me (left) with my coding team and our computer science teacher' className='portfolio-page-picture'></img>
                    </picture>
                    <div className='portfolio-page-pic-caption'>Me (left) with my coding team and our computer science teacher</div>
                </div>
            </div>
        </div>
    )
}
export default Troy