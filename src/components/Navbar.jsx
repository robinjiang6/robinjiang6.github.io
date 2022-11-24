import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//import {Button} from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  /*
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
      setClick(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);*/
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-name" onClick={closeMobileMenu}>
                Robin Jiang
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <img src = {click ? '/images/menuXWhite.png':'/images/menuLinesWhite.png'} alt = "menu" id = {click ? 'menuX':'menuLines'}/>
              </div>
              <ul className={click ? 'nav-menu-active':'nav-menu'}>
                <li className = 'nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className = 'nav-item'>
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About Me
                  </Link>
                </li>
                <li className = 'nav-item'>
                  <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar