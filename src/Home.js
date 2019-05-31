import React from 'react';
import logo from './logo.svg';
import Summary from './Summary.js';
import Navigation from './Navigation.js';
import Story from './Story.js';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="Home">
        <h1>VENUS AURELIUS</h1>
        <img className="separator" src={require('./images/line.svg')}/>
        <p>Creative Director & Visual Designer</p>
        <a>Enter→</a>
      </div>
      <Navigation />
      <Summary />
      <Story />
    </div>
  );
}

export default Home;
