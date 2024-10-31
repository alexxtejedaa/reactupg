import SiliconLogo from '../assets/Desktop bilder/Silicon.svg'
import React, { useState, useEffect } from 'react';


const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('darkmode');
    if (storedTheme === 'on') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('darkmode', 'off');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('darkmode', 'on');
      document.documentElement.classList.add('dark');
    }
  };

  return (

    <header>

        <div className="container">
          <nav className="navbar">
            <div className="nav-left">
              <div className="logo">
                  <img src={SiliconLogo} />
              </div> 
              <ul className="nav-links">
                  <li><a href="#">Features</a></li>
              </ul>
            </div>

            <div className="nav-right">
              <div className="dark-mode-toggle"> 
                <span>Dark Mode</span>
                <input type="checkbox" id="dark-mode" className="toggle-checkbox" />
                <label htmlFor="dark-mode" className="toggle-label"></label>
              </div>
                  <button className="sign-btn">Sign in / up</button>
            </div>
          </nav>

        </div>
    </header>

  )
}

export default Header