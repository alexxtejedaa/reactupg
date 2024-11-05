import React from 'react';
import Notis from '../assets/Desktop bilder/notis.svg';
import Brevsvg from '../assets/Desktop bilder/brevsvg.svg';


const Subscribewrapper = () => {
  return (
    <div className="subscribe-wrapper">
    <section className="subscribe-section">
      <div className="container">

        <div className="subscribe-left">
          <img src={Notis} />
          <p>Subscribe to our newsletter to stay<br/>informed about latest updates</p>
        </div>

        <div className="subscribe-right">
          <form className="subscribe-form">
            <div className="input-group">
              <label htmlFor="email"></label>
              <img src={Brevsvg} />
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Subscribewrapper