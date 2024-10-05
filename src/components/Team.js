import React from 'react';
import teamImage1 from "../assets/img/team/team-img-1.jpg"
import teamImage2 from "../assets/img/team/team-img-2.jpg"
import teamImage3 from "../assets/img/team/team-img-3.jpg"
import teamImage4 from "../assets/img/team/team-img-4.jpg"


const Team = () => {
  return (
    <div className="team-section">
      <h2>
        We are a group of <span className="highlight">innovative</span>, experienced,
        <br /> and proficient teams.
      </h2>
      <div className="team-container">
        <div className="team-member">
          <img src= {teamImage1} alt="Flora Nyra" />
          <h3>Flora Nyra</h3>
          <p>Product Manager</p>
        </div>

        <div className="team-member">
          <img src= {teamImage2} alt="Evander Mac" />
          <h3>Evander Mac</h3>
          <p>Art Director</p>
        </div>

        <div className="team-member">
          <img src= {teamImage3} alt="Taytum Elia" />
          <h3>Taytum Elia</h3>
          <p>Investment Planner</p>
        </div>

        <div className="team-member">
          <img src= {teamImage4} alt="Wylder Elio" />
          <h3>Wylder Elio</h3>
          <p>Financial Analyst</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
