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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const res = await axios.get("https://win24-assignment.azurewebsites.net/api/testimonials");
        setTestimonials(res.data);
        setIsLoading(false);
      } catch (err) {
        setError('Något gick fel när vi hämtade testimonials');
        setIsLoading(false);
      }
    };
    getTestimonials();
  }, []);

  if (isLoading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>{error}</div>
  }
  console.log(testimonials);
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
          {testimonials.map((testimonial) => (
            <TestimonialItem
              key={testimonial.id}
              author={testimonial.author}
              jobRole={testimonial.jobRole}
              comment={testimonial.comment}
              starRating={testimonial.starRating}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>

      </div>
    </section>    
  );
};

export default Testimonialssection;