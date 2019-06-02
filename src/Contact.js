import React from 'react';
import './Home.css';

function Contact() {
  return (
    <div className="Contact">
      <h2>CONTACT</h2>
      <form className="contact-form">
        <p>name
          <input type="text"></input>
        </p>
        <p>email
          <input type="text"></input>
        </p>
        <p>message <br/>
          <textarea type="text"></textarea>
        </p>

        <div className="button-row">
          <button id="primary">→Send</button>
          <button id="secondary">→Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
