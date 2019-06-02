import React, { Component } from 'react';
import './Home.css';
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount(){
   window.addEventListener('scroll', this.handleScroll);
 }

 componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
 }

 handleScroll() {
   if (window.scrollY > 100) {
     this.setState({
       scrollingLock: true
     });
   } else if (window.scrollY < 100) {
     this.setState({
       scrollingLock: false
     });
   }
 }

  render() {
    return (
      <div className="Navigation" style={ this.state.scrollingLock ? { position: "fixed", top: 0 } : {} }>
        <Link
          id="first"
          activeClass="active"
          to="Summary"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          >
          summary
        </Link>
        <Link
            activeClass="active"
            to="Story"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            >
          story
        </Link>
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={this.scrollToTop}
          >
          VENUS AURELIUS
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          >
          projects
        </Link>
        <Link
          id="last"
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          >
          contact
        </Link>
      </div>
    );
  }
}

export default Navigation;
