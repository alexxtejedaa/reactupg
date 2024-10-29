import React from 'react'
import SiliconLogo from '../assets/Desktop bilder/Silicon.svg'

const Header = () => {
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