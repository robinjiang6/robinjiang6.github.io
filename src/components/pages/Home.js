import '../../App.css';
import './Home.css';

function Home() {
    return(
        <div className='home'>
            <div className='home-container'>
                <p className='title'>Welcome to my Website</p>
                <video src='/videos/portal-min.mp4' autoPlay loop muted className='video'/>
                <p className='caption'>A looped video of one of my 3D designs</p>
            </div>
        </div>
    ); 
}
export default Home;