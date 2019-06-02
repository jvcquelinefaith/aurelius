import React from 'react';
import logo from './logo.svg';
import Summary from './Summary.js';
import Navigation from './Navigation.js';
import Story from './Story.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import { Link, animateScroll as scroll } from "react-scroll";
import './Home.css';

function Home() {
  return (
    <div>
      <div id="Home" className="Home">
        <h1>VENUS AURELIUS</h1>
        <img className="separator" src={require('./images/line.svg')}/>
        <p>Creative Director & Visual Designer</p>
        <Link
          id="first"
          activeClass="active"
          to="Summary"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
        →Enter
        </Link>
      </div>
      <Navigation id="Navigation" />
      <Summary id="Summary" />
      <Story id="Story"/>
      <Projects id="Projects" />
      <Contact id="Contact" />
      <Footer />
    </div>
  );
}

export default Home;
