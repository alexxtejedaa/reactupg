import React from 'react';
import Imgphone from '../assets/Desktop bilder/imgphone.svg';
import Easypayment from '../assets/Desktop bilder/iconeasypayment.svg';
import Iconcost from '../assets/Desktop bilder/iconCost.svg';
import Iconcashback from '../assets/Desktop bilder/iconcashback.svg';
import Icondatasecurity from '../assets/Desktop bilder/iconDataSecurity.svg';
import Icon247 from '../assets/Desktop bilder/icon247.svg';
import Topstandardsicon from '../assets/Desktop bilder/icontopstandards.svg';


const Appfeatures = () => {
  return (

    <section className="app-features">
      <div className="container">
        <div className="features-row">

          <div className="features-image">
            <img src={Imgphone} />
          </div>

          <div className="features-content">
            <h2>App Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus</p>

            <div className="features-list">

              <div className="feature">
                <img src={Easypayment} />
                <div className="feature-content">
                  <h3>Easy Payments</h3>
                  <p>Make fast, secure, and easy payments with just a few taps.</p>
                </div>
              </div>

              <div className="feature">
                <img src={Iconcost} />
                <div className="feature-content">
                  <h3>Cost Statistics</h3>
                  <p>Track and review your expenses with detailed statistics.</p>
                </div>
              </div>

              <div className="feature">
                <img src={Iconcashback} />
                <div className="feature-content">
                  <h3>Regular Cashback</h3>
                  <p>Earn cashback on transactions regularly through our app.</p>
                </div>
              </div>

              <div className="feature">
                <img src={Icondatasecurity} />
                <div className="feature-content">
                  <h3>Data Security</h3>
                  <p>Your data is protected with the highest security standards.</p>
                </div>
              </div>

              <div className="feature">
                <img src={Icon247} />
                <div className="feature-content">
                  <h3>Support 24/7</h3>
                  <p>Access our customer support any time, day or night.</p>
                </div>
              </div>

              <div className="feature">
                <img src={Topstandardsicon} />
                <div className="feature-content">
                  <h3>Top Standards</h3>
                  <p>Enjoy the highest standards of banking and financial services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
   )
}

export default Appfeatures