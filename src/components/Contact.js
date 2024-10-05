import React from 'react';
import contactImage1 from "../assets/img/contact/contact-img-1.jpg"


const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image">
          <img src= {contactImage1} alt="team" />
        </div>
        <div className="contact-details">
          <h2>Get in touch</h2>
          <p>
            We’re always on the lookout to work with new clients. If you’re
            interested in working with us, please get in touch in one of the following
            ways.
          </p>
          <ul>
            <li><span>📍</span> Address: 8014 Edith Blvd NE, Albuquerque, New York, United States</li>
            <li><span>📞</span> Phone: 
            <br/>
            <a href="tel:+5057922430" className="contact-link"> (505) 792-2430</a></li>
            <li><span>✉️</span> E-Mail: 
            <br/>
            <a href="mailto:demo@yourdomain.com" className="contact-link">demo@yourdomain.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;


