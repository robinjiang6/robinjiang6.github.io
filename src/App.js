import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Ponyo from './components/pages/Ponyo';
import Other from './components/pages/Other';
import About from './components/pages/About';
import ClickMe from './components/pages/ClickMe';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/secret-ponyo' element={<Ponyo/>}/>
          <Route path='/cool-stuff' element={<Other />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/click-me' element={<ClickMe />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
