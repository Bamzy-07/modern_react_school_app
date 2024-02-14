import React from 'react';
import './proprietress.css';

import quote from '../../assets/quote.png';
import head from '../../assets/head.jpg';
import sign from '../../assets/sign.png';

const Proprietress = () => {
  return (
    <div className='header section__padding'>
        <div className="app__info">
            <div className='app__text'>
              <h2 className='custom__h1'>Proprietress' Word</h2>
              <hr />
            </div>
            <h1 className="custom__h1">What we believe in</h1>

            
            <div className="app__head-content_quote">
                <img src={quote} alt="quote_image" />
                <p className="p__poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                 auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            </div>
            

            <div className="app__head-sign">
                <p>Cadla Awesome</p>
                <p className="p__poppins">Founder</p>
                <img src={sign} alt="sign_image" />
            </div>
        </div>

        <div className="app__img">
            <img src={head} alt="proprietress_image" />
        </div>
    </div>
  )
}

export default Proprietress