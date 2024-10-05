import React from 'react';

const Testimonial = ({ name, role, text, image, rating }) => {
  return (
    <div className="testimonial">
      <img src={image} alt={`${name}'s picture`} className="testimonial-img" />
      <div className="testimonial-content">
        <div className="testimonial-rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <p className="testimonial-text">{text}</p>
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-role">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;


