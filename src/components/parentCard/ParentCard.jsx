import React from 'react';
import './parentCard.css';

import quote from '../../assets/quote.png';

const ParentCard = ({pic, text, name}) => {
  return (
    <div className='card'>
        <img src={pic} alt='parent' />
        <div className='card__quote'>
            <img src={quote} alt="quote_image" />
            <p className="p__poppins">{text}</p>
        </div>
        <p className='p__poppins'>{name}</p>
    </div>
  )
}

export default ParentCard