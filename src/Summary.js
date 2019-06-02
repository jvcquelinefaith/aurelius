import React from 'react';
import './Home.css';

function Summary() {
  return (
    <div className="Summary">
      <img className="summary-background-main" src={require('./images/me.jpg')}/>
      <img className="summary-background" src={require('./images/me.jpg')}/>
      <p className="summary-text">
          Venus is a renowned designer
          and 4-time award winning
          creative director. She has
          chaired the conception of
          multiple campaigns and
          published myriad magazines
          including Vogue, Paper and
          Kinfolk to name a few.
      </p>
    </div>
  );
}

export default Summary;
