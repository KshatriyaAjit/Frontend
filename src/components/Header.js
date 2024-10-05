// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import logo from '../assets/img/branding/wave-logo.svg';

const Header = () => {
  return (
    <header className="sticky-header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">


          <li> <Link className="nav-item-link" to="home" smooth={true} duration={500} spy={true} offset={-70} > Home </Link> </li>      
          <li> <Link className="nav-item-link" to="services" smooth={true} duration={500} spy={true} offset={-70} > Services</Link> </li>
          <li><Link className="nav-item-link" to="portfolio" smooth={true} duration={500} spy={true} offset={-70} >Portfolio</Link></li>
          <li><Link className="nav-item-link" to="about" smooth={true} duration={500} spy={true} offset={-70}  >About</Link></li>
          <li><Link className="nav-item-link" to="team" smooth={true} duration={500} spy={true} offset={-70}  >Team</Link></li>
          <li><Link className="nav-item-link" to="pricing" smooth={true} duration={500} spy={true} offset={-70}   >Pricing</Link></li>
          <li><Link className="nav-item-link" to="blog" smooth={true} duration={500} spy={true} offset={-70}  >Blog</Link></li>
          <li><Link className="nav-item-link" to="contact" smooth={true} duration={500} spy={true} offset={-70} >Contact</Link></li>
        
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
