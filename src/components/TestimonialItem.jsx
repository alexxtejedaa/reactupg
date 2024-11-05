// components/Testimonialssection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TestimonialItem from './TestimonialItem';

const Testimonialssection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funktion för att hämta testimonials med axios
  const getTestimonials = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://win24-assignment.azurewebsites.net/api/testimonials');
      setTestimonials(res.data); // Sätt testimonials till state
      setIsLoading(false);
    } catch (err) {
      setError('Något gick fel när vi hämtade testimonials');
      setIsLoading(false);
    }
  };

  // Använd useEffect för att hämta testimonials när komponenten laddas
  useEffect(() => {
    getTestimonials();
  }, []); // Tom beroendelista innebär att detta bara körs en gång vid komponentens montering

  // Om vi fortfarande hämtar data, visa laddningsmeddelande
  if (isLoading) {
    return <div>Loading testimonials...</div>;
  }

  // Om vi får ett fel, visa felmeddelande
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Clients are Loving Our App</h2>
        </div>
        <div className="testimonials-boxes">
          {testimonials.map((item) => (
            <TestimonialItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonialssection;
