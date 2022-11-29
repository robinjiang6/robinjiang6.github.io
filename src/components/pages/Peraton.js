import React from 'react';
import '../../App.css';
import './PortfolioPage.css';
import BackLink from '../BackLink';

function Peraton() {
    return(
        <div className='portfolio-container'>
            <BackLink />
            <div className='portfolio-page-title'>
                Peraton<span className='portfolio-page-title-dash'> - </span><span className='portfolio-page-position'>Facilities Engineering Intern</span>
            </div>
            <div className='portfolio-page-description-container'>
                <div className='portfolio-page-description'>
                    At Peraton, I worked as a Facilities Engineering Intern, focusing in the electrical engineering discipline. I was lucky enough to be able to experience the company workflow by shadowing my mentor, Oscar. Moreover, I learned much about the physics behind circuit breakers, the process of transmitting electricity, and redundant systems throughout the site.
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/peraton-1-400w.png' className='portfolio-page-picture'></source>
                        <img src='/images/peraton-1.png' alt='an excerpt from my solution presentation' className='portfolio-page-picture'></img>
                    </picture>
                    I utilized SEL SynchroWAVe Event Software to analyze power transient events from 2016 and 2018 throughout the Goldstone site. Pictured above is an example of the three phase voltage and current running through a circuit breaker.
                    <picture>
                        <source media='(max-width:600px)' srcset='/images/peraton-2-400w.png' className='portfolio-page-picture'></source>
                        <img src='/images/peraton-2.png' alt='an example of SEL SynchroWAVe ES' className='portfolio-page-picture'></img>
                    </picture>
                    Along with my fellow intern, I traced the power transient event to a break in a two mile stretch of wire. Above is an excerpt from one of the presentations I created explaining the solutions I researched. Unfortunately, I cannot show the actual site electrical blueprint or other possibly sensitive information that I was working with.
                </div>
            </div>
        </div>
    )
}
export default Peraton