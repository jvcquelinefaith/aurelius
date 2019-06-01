import React from 'react';
import Carousel from 'nuka-carousel';
import './Home.css';

function Projects() {
  return (
    <div className="Projects">
      <h2>PROJECTS</h2>
      <Carousel>
        <img className="img-2" src={require('./images/2.jpg')} />
        <img className="img-3" src={require('./images/3.jpg')} />
        <img className="img-4" src={require('./images/4.jpg')} />
      </Carousel>
    </div>
  );
}

export default Projects;
