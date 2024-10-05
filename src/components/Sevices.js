// src/components/Services.js
import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Services = () => {
  return (
    <div className="services">  {/* Use div instead of Services */}
     <div className="text-section">
     <h1>
    You will get the <span className="highlight">perfect</span> <br />
    <span className="highlight-red">resolutions</span> <br />
    with our proficient services.
    </h1>
    </div>


      <div className="card-container">
  <div className="card">
    <div className="card-icon">
      <i className="fas fa-chart-pie"></i> {/* Market Research Icon */}
    </div>
    <h3>Market Research</h3>
    <p>We can help you to understand your target market and identify new opportunities for growth. We offer a variety of market research services, interviews, and focus groups.</p>
    <a href="#">Learn More →</a>
  </div>

  <div className="card">
    <div className="card-icon">
      <i className="fas fa-laptop-code"></i> {/* Web Design Icon */}
    </div>
    <h3>Web Design</h3>
    <p>We can help you to create a visually appealing and user-friendly website. We take into account your brand identity and target audience when designing your website.</p>
    <a href="#">Learn More →</a>
  </div>

  <div className="card">
    <div className="card-icon">
      <i className="fas fa-search"></i> {/* SEO Services Icon */}
    </div>
    <h3>SEO Services</h3>
    <p>We can help you to improve your website's visibility in search engine results pages (SERPs). This can lead to more traffic to your website and more conversions.</p>
    <a href="#">Learn More →</a>
  </div>

  <div className="card">
    <div className="card-icon">
      <i className="fas fa-bullhorn"></i> {/* Content Marketing Icon */}
    </div>
    <h3>Content Marketing</h3>
    <p>We can help you to promote your business online through a variety of digital marketing channels, including SEO, PPC, social media marketing, and email marketing.</p>
    <a href="#">Learn More →</a>
  </div>
</div>


  


    
    </div>
  );
};

export default Services;

  