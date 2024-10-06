import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroImage from '../assets/img/hero/hero-home.jpg';

const Hero = () => {

  const highlightText = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: ['solutions', 'strategies', 'innovations'], // Add your desired phrases here
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    // Initialize Typed.js on the highlightText ref
    typed.current = new Typed(highlightText.current, options);

    return () => {
      // Destroy Typed.js instance during cleanup to prevent memory leaks
      typed.current.destroy();
    };
  }, []);



  return (

<div className="hero-content">


<div className="hero-section">
  <h1>
    We provide easy 
    <br/>
    <span className="highlight" ref={highlightText}>solutions </span>
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

