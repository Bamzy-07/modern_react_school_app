import React from 'react';
import './cta.css';

const Cta = () => {
    return (
        <div className="gpt3__cta section__padding">
          <div className="gpt3__cta-content">
             <h3>Ready To Join With Us?</h3>
          </div>
          <div className="gpt3__cta-button">
            <a href='/JoinUs'>
            <button type="button">Get Started</button>
            </a>
          </div>
        </div>
  )
}

export default Cta