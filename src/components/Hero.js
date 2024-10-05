import React from 'react';
import heroImage from '../assets/img/hero/hero-home.jpg';

const Hero = () => {
  return (

<div className="hero-content">


<div className="hero-section">
  <h1>
    We provide easy 
    <br/>
    <span className="highlight">solutions </span>
    for startups <br /> 
    <span className="bold-text">at affordable rates.</span>
  </h1>
  <p>
    Our methods are straight, comfortable, and established to 
    <br/>
    ensure evolution and acceleration.
  </p>
  <div className="button-container">
    <button className="primary-button">Free Consultation</button>
    <button className="secondary-button">Buy Credits</button>
  </div>
</div>

 
  



<div className='hero-image'>
        <img src={heroImage} />
</div>



    </div>
   
        
  
  );
};

export default Hero;

