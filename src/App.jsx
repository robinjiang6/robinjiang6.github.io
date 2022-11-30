import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Ponyo from './components/pages/Ponyo';
import Ponyo2 from './components/pages/Ponyo2';
import Portfolio from './components/pages/Portfolio';
import Peraton from './components/pages/Peraton';
import DiscoveryCube from './components/pages/DiscoveryCube';
import Troy from './components/pages/Troy';
import Uci from './components/pages/Uci';
import About from './components/pages/About';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
function App() {
  const getMobileHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.querySelector(':root').style.setProperty("--vh", `${vh}px`);
  }
  getMobileHeight()
  window.addEventListener('resize', () => {
    getMobileHeight()
  });
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className='main-page'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/secret-ponyo' element={<Ponyo/>}/>
            <Route path='/super-secret-ponyo' element={<Ponyo2 />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/portfolio/peraton' element={<Peraton />}/>
            <Route path='/portfolio/discovery-cube' element={<DiscoveryCube />}/>
            <Route path='/portfolio/troy-high-school' element={<Troy />}/>
            <Route path='/portfolio/uci' element={<Uci />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
