import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <div className="portfolio">
    <h2>My Projects</h2>
    <div className="grid-container">
      {/* Example projects */}
      <div className="grid-item">Project 1</div>
      <div className="grid-item">Project 2</div>
      <div className="grid-item">Project 3</div>
      <div className="grid-item">Project 4</div>
    </div>
  </div>
);

export default Portfolio;
