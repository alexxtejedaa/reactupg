import React from 'react';
import Checkmark from '../assets/Desktop bilder/checkmark.svg';
import Graf1 from '../assets/Desktop bilder/graf1.svg';
import Visakort from '../assets/Desktop bilder/visakort.svg';
import Iconeasypayment from '../assets/Desktop bilder/iconeasypayment.svg';
import Iconcashback from '../assets/Desktop bilder/iconcashback.svg';



const Moneytransfersection = () => {
  return (

    <section className="money-transfer-section">
      <div className="container">
        <div className="content-wrapper">

            <div className="text-block">
                <h2>Make your money transfer simple and clear</h2>
                <ul className="features-list">
                    <li>
                      <img src={Checkmark} /> 
                      <p>Banking transactions are free for you</p>
                    </li>
                    <li>
                      <img src={Checkmark} /> 
                      <p>No monthly cash commission</p>
                    </li>
                    <li>
                      <img src={Checkmark} /> 
                      <p>Manage payments and transactions online</p>
                    </li>
                </ul>
                <a href="#" className="learn-more-btn">Learn more</a>
            </div>

            <div className="image-block">
                <img src={Graf1} />
            </div>
        </div>

        <div className="content-wrapper">
            <div className="image-block">
                <img src={Visakort} />
            </div>

            <div className="text-block">
                <h2>Receive payment from international bank details</h2>
                <div className="icons-list">
                    <div className="icon-item">
                        <img src={Iconeasypayment} />
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div className="icon-item">
                        <img src={Iconcashback} />
                        <p>A elementur and imperdiet enim, pretium eriam facilisi aenean quam mauris</p>
                    </div>
                </div>
                <a href="#" className="learn-more-btn">Learn more</a>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Moneytransfersection