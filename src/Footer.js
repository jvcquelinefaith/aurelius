import React from 'react';
import './Home.css';

function Footer() {
  return (
    <div className="Footer">
      <img className="social" src={require('./images/social.png')} />
      <p>© All Rights Reserved. 2019.
      <br/>
      Designed by: Jackie Charles-Etuk</p>
    </div>
  );
}

export default Footer;
