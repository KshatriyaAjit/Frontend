// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import logo from '../assets/img/branding/wave-logo.svg';

const Header = () => {
  return (
    <header className="sticky-header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">


          <li> <ScrollLink className="nav-item-link" to="home" smooth={true} duration={100} spy={true} offset={-70} > Home </ScrollLink> </li>      
          <li> <ScrollLink className="nav-item-link" to="services" smooth={true} duration={100} spy={true} offset={-70} > Services</ScrollLink> </li>
          <li><ScrollLink className="nav-item-link" to="portfolio" smooth={true} duration={100} spy={true} offset={-70} >Portfolio</ScrollLink></li>
          <li><ScrollLink className="nav-item-link" to="about" smooth={true} duration={100} spy={true} offset={-70}  >About</ScrollLink></li>
          <li><ScrollLink className="nav-item-link" to="team" smooth={true} duration={100} spy={true} offset={-70}  >Team</ScrollLink></li>
          <li><ScrollLink className="nav-item-link" to="pricing" smooth={true} duration={100} spy={true} offset={-70}   >Pricing</ScrollLink></li>
          <li><ScrollLink className="nav-item-link" to="blog" smooth={true} duration={100} spy={true} offset={-70}  >Blog</ScrollLink></li>
          <li><ScrollLink className="nav-item-link" to="contact" smooth={true} duration={100} spy={true} offset={-70} >Contact</ScrollLink></li>
        
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
