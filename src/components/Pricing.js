import React from 'react';


const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2>Our <span className="highlight">Pricing</span></h2>
        <p>Explore our flexible pricing to find an excellent fit to run your business.</p>
        <button className="more-plans-btn">More Plans</button>
      </div>

      <div className="pricing-plans">
        <div className="pricing-card starter">
          <h3>Starter</h3>
          <h2 className="price">$45</h2>
          <p>USD / Month</p>
          <ul className="features">
            <li>5 Bootstrap Install</li>
            <li>100,000 Visits</li>
            <li>30 GB Disk Space</li>
            <li className="unavailable">Free SSL and CDN</li>
            <li className="unavailable">Free Support</li>
          </ul>
          <button className="choose-plan-btn">Choose Plan</button>
        </div>

        <div className="pricing-card pro">
          <h3>Pro</h3>
          <h2 className="price">$149</h2>
          <p>USD / Month</p>
          <ul className="features">
            <li>20 Bootstrap Install</li>
            <li>400,000 Visits</li>
            <li>50 GB Disk Space</li>
            <li>Free SSL and CDN</li>
            <li>Free Support</li>
          </ul>
          <button className="choose-plan-btn">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
