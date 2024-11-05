import React from 'react';
import Rating5 from '../assets/Desktop bilder/rating5.svg';
import Rating4 from '../assets/Desktop bilder/rating4.svg';

const TestimonialItem = ({ author, jobRole, comment, starRating, avatarUrl }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-box">
        <div className="testimonial-rating">
          {/* Rendera rätt betygsikon beroende på starRating */}
          {starRating === 5 ? (
            <img src={Rating5} alt="5 Star Rating" className="stars-icon" />
          ) : (
            <img src={Rating4} alt="4 Star Rating" className="stars-icon" />
          )}
        </div>
        <p className="testimonial-comment">{comment}</p>
        <div className="client-info">
          <img src={avatarUrl} alt={`${author} avatar`} className="client-avatar" />
          <div>
            <p className="client-name">{author}</p>
            <p className="client-role">{jobRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
