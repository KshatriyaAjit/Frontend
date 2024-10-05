import React from 'react';
import portfolioImage1 from "../assets/img/portfolio/project-landscape-1.jpg"
import portfolioImage2 from "../assets/img/portfolio/project-landscape-2.jpg"
import portfolioImage3 from "../assets/img/portfolio/project-landscape-3.jpg"
import portfolioImage4 from "../assets/img/portfolio/project-landscape-4.jpg"
import portfolioImage5 from "../assets/img/portfolio/project-portrait-1.jpg"
import portfolioImage6 from "../assets/img/portfolio/project-portrait-2.jpg"
import portfolioImage7 from "../assets/img/portfolio/project-portrait-3.jpg"
import portfolioImage8 from "../assets/img/portfolio/project-portrait-4.jpg"



const Portfolio = () => {
  const images = [
    { src: portfolioImage1, text: 'Text 1' },
    { src: portfolioImage2, text: 'Text 2' },
    { src: portfolioImage3, text: 'Text 3' },
    { src: portfolioImage4, text: 'Text 4' },
    { src: portfolioImage5, text: 'Text 5' },
    { src: portfolioImage6, text: 'Text 6' },
    { src: portfolioImage7, text: 'Text 7' },
    { src:  portfolioImage8, text: 'Text 8' },
  ];

  return (
   
   
   <div class="wrapper">
            
            <div class="container">
            <h1>Meet our portfolio to 
              <br></br>
              <span>Kickstart </span>
              your success
            </h1>
              <div class="galler">
                  <figure class="card">
                        <img src= {portfolioImage1} alt=""/>
                        <figcaption>Image1</figcaption>
                  </figure>
                  <figure class="card">
                        <img src= {portfolioImage2} alt=""/>
                        <figcaption>Image2</figcaption>
                  </figure>
                  <figure class="card">
                        <img src= {portfolioImage3} alt=""/>
                        <figcaption>Image3</figcaption>
                  </figure>
                  <figure class="card">
                        <img src={portfolioImage4} alt=""/>
                        <figcaption>Image4</figcaption>
                  </figure>
                  <figure class="card">
                        <img src={portfolioImage5} alt=""/>
                        <figcaption>Image5</figcaption>
                  </figure>
                  <figure class="card">
                        <img src={portfolioImage6} alt=""/>
                        <figcaption>Image6</figcaption>
                  </figure>
                  <figure class="card">
                        <img src={portfolioImage7} alt=""/>
                        <figcaption>Image7</figcaption>
                  </figure>
                  <figure class="card">
                        <img src={portfolioImage8} alt=""/>
                        <figcaption>Image8</figcaption>
                  </figure>
                  <figure class="card">
                        <img src= {portfolioImage8} alt=""/>
                        <figcaption>Image9</figcaption>
                  </figure>
              </div>

      </div>

      </div>
  );
};

export default Portfolio;


