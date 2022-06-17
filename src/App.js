import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Ponyo from './components/pages/Ponyo';
import Other from './components/pages/Other';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/secret-ponyo' element={<Ponyo/>}/>
          <Route path='/cool-stuff' element={<Other />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
