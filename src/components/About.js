import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faHeartbeat, faDroplet, faCloud } from '@fortawesome/free-solid-svg-icons';

import awsImage from '../assets/img/about/about-img-1.png'; // Replace with your image

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const dropdownData = [
    {
      title: "Highly Competitive Rates",
      content: `We offer some of the most competitive rates in the industry, without sacrificing quality.We understand that cost is an important factor when choosing a service provider, and we are committed to providing our clients with the best possible value for their money.`,
    },
    {
      title: "Contemporary Skills",
      content: `Our team is made up of highly skilled and experienced professionals who are up-to-date on the latest trends and technologies. We are constantly investing in our team's development to ensure that we can provide our clients with the highest level of service.`,
    },
    {
      title: "Top Notch Support",
      content: `We are committed to providing our clients with top-notch support. Our team is available 24/7 to answer your questions and resolve any issues you may encounter. We believe that  our support is one of our greatest strengths, and we are proud to offer it to our clients.`,
    },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className = "main-container">

 
    <div className="about-container">
      <div className="about-left">
        <img src={awsImage} alt="AWS Logo" className="about-image" />
      </div>
      <div className="about-right">
        <h1 className="about-heading">
          Our <span className="highlight">optimistic</span> methods will let you prefer us.
        </h1>
        <p className="about-paragraph">
          Here are the leading reasons to prefer us for your brand. We believe in transparency without any hidden barriers.
        </p>
        <div className="dropdown-container">
          {dropdownData.map((item, index) => (
            <div key={index} className="dropdown-item">
              <div
                className={`dropdown-title ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleDropdown(index)}
              >
                {item.title}
              </div>
              {activeIndex === index && (
                <div className="dropdown-content">
                  {item.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>







    </div>

    <div className="statistics-container">
      <div className="stat-card" style={{ backgroundColor: '#fef7e2' }}>
        <div className="icon">
          <FontAwesomeIcon icon={faUserPlus} size="3x" color="#3969fd" />
        </div>
        <h2>120K</h2>
        <p>Happy Customers</p>
      </div>

      <div className="stat-card" style={{ backgroundColor: '#e6f9e5' }}>
        <div className="icon">
          <FontAwesomeIcon icon={faHeartbeat} size="3x" color="#3969fd" />
        </div>
        <h2>1890+</h2>
        <p>Issues Solved</p>
      </div>

      <div className="stat-card" style={{ backgroundColor: '#fce6ef' }}>
        <div className="icon">
          <FontAwesomeIcon icon={faDroplet} size="3x" color="#3969fd" />
        </div>
        <h2>250K</h2>
        <p>Finished Projects</p>
      </div>

      <div className="stat-card" style={{ backgroundColor: '#e0f6f9' }}>
        <div className="icon">
          <FontAwesomeIcon icon={faCloud} size="3x" color="#3969fd" />
        </div>
        <h2>786+</h2>
        <p>Awwwards Winning</p>
      </div>
    </div>

    </div>
  );
};

export default About;


