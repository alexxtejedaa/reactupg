import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TestimonialItem from './TestimonialItem';
import Citat1 from '../assets/Desktop bilder/citat.svg';
import Rating4 from '../assets/Desktop bilder/rating4.svg';
import Emoji1 from '../assets/Desktop bilder/emoji1.svg';
import Rating5 from '../assets/Desktop bilder/rating5.svg';
import Emoji2 from '../assets/Desktop bilder/emoji2.svg';

const Testimonialssection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const res = await axios.get("https://win24-assignment.azurewebsites.net/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    getTestimonials();
  }, []);


  return (
    <section className="testimonials-section">
      <div className="container">
        
        <div id="quote-icon-wrapper">
          <img src={Citat1} />
        </div>
        <div id="quote-icon-wrapper2">
          <img src={Citat1} />
        </div>
        
        <div className="testimonials-header">
          <h2>Clients are<br/>Loving Our App</h2>
        </div>
        
        <div className="testimonials-boxes">

          <div className="testimonial-container">
            <div className="testimonial-box">
              <img src={Rating4} />
              <p>
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
              </p>
              <div className="client-info">
                <img src={Emoji1} />
                <div>
                  <p className="client-name">Fannie Summers</p>
                  <p className="client-role">Designer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-container">
            <div className="testimonial-box">
              <img src={Rating5} />
              <p>
                Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
              </p>
              <div className="client-info">
                <img src={Emoji2} />
                <div>
                  <p className="client-name">Albert Flores</p>
                  <p className="client-role">Developer</p>
                </div>
              </div>
            </div>
          </div>           
        </div>
        
      </div>
    </section>    
  );
};

export default Testimonialssection;