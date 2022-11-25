import '../../App.css';
import './Home.css';
//import React, {useEffect, useState} from 'react';
import React from 'react';
import ThreeD from '../ThreeD';

function Home() {
  /*
    const [mobile, setMobile] = useState(false);
    const [rotate, setRotate] = useState(false);
    
    const showVideo = () => {
        if(window.innerWidth <= 960){
          setMobile(true);
        }else{
          setMobile(false);
        }
      };

    const rotateImg = () => {
        if(window.innerWidth <= 700){
          setRotate(true);
        }else{
          setRotate(false);
        }
      };
      useEffect(() =>{
        showVideo();
        rotateImg();
      }, []);

      window.addEventListener('resize', showVideo);
      window.addEventListener('resize', rotateImg);
*/
    return(
        <div className='home'>
            <div className='home-container'>
                <p className='title'>Welcome to my Website</p>
                <ThreeD />
                {/*
                <p className='caption'>A looped video of one of my 3D designs</p>
                <p className='caption2'>A picture of one of my 3D designs</p>
                <video src={mobile ? 'data:,':'/videos/portal-min.mp4'} autoPlay loop muted className='video' alt='was a video'/>
                <img src={rotate ? '/images/portal-rotated.png':'/images/portal.png'} className='image-portal' alt='one of my 3D designs'></img>
                */}
            </div>
        </div>
    ); 
}
export default Home;