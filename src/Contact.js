import React from 'react';
import './Home.css';

function Contact() {
  return (
    <div className="Contact">
      <h2>CONTACT</h2>
      <form className="contact-form">
        <p>name</p>
        <input type="text"></input>
        <p>email</p>
        <input type="text"></input>
        <p>message</p>
        <textarea type="text"></textarea>
      </form>
    </div>
  );
}

export default Contact;
