// src/App.js
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Contact from "./components/Contact"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Services from "./components/Sevices"
import Parallel from "./components/Parallel"
import Team from "./components/Team"
import Pricing from "./components/Pricing"
import TestimonialsSection from "./components/TestimonialsSection"



import '../style.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">

     <Header/>

     <section id="home">
        <Hero />
      </section>

     <section id="services">
        <Services/>
      </section>

     <section id="portfolio">
        <Portfolio/>
      </section>
      <Parallel/>

      <section id="about">
        <About/>
      </section>


      <section id="team">
        <Team/>
      </section>


      <section id="pricing">
       <Pricing/>
      </section>

     <TestimonialsSection/>

     <section id="blog">
        <Blog/>
      </section>


     <section id="contact">
        <Contact/>
      </section>



      
      
      <Footer/>
   
    
    
    




    
    </div>
  );
}






export default App;
