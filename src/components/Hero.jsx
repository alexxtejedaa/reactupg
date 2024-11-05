import React from 'react';
import Appstore from '../assets/Desktop bilder/appstore.svg';
import Googleplay from '../assets/Desktop bilder/googleplay.svg';
import Discovermore from '../assets/Desktop bilder/discover-more.svg';
import Heroimage from '../assets/Desktop bilder/hero-image.svg';


const Hero = () => {
  return (
    <section className="hero">
          <div className="container">
            <div className="hero-row">

              <div className="hero-content">
                <h1>Manage All Your Money in One App</h1>
                <p>We offer you a new generation of the mobile banking. Save, spend and manage money in your pocket.</p>

                <div className="download-btn">
                  <a href="#" className="app-store-btn">
                    <img src={Appstore} />
                  </a>

                  <a href="#" className="google-btn">
                    <img src={Googleplay} />
                  </a>
                </div>

                <div className="discover-more">
                  <img src={Discovermore} />
                </div>
              </div>

              <div className="hero-image">
                <img src={Heroimage} />
              </div>
            </div>
          </div>
      </section>
  )
}

export default Hero