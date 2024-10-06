import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import heroImage1 from '../assets/img/hero/hero-home.jpg';
import heroImage2 from '../assets/img/blog/blog-image-1.jpg';
import heroImage3 from '../assets/img/blog/blog-image-2.jpg';




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

  const images = [
    { src: heroImage1, alt: 'Hero Slide 1' },
    { src: heroImage2, alt: 'Hero Slide 2' },
    { src: heroImage3, alt: 'Hero Slide 3' },
  ];


  return (

<div className="hero-content">


<div className="hero-section">
  <h1>
    We provide easy 
    <br/>
    <span className="highlight" ref={highlightText} >solutions </span>
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



<Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={heroImage1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={heroImage2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={heroImage3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>



</div>



    </div>
   
        
  
  );
};

export default Hero;

