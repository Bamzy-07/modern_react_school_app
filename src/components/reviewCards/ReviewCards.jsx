import React from 'react';
import './reviewCards.css';

const ReviewCards = ({text,icon, name, position}) => {
  return (
    <div className='revcards'>
        <div className='review'>
            <p className='p__poppins'>{text}</p>
        </div>
        <div />
        <div className='review__person'>
            <img src={icon} alt='person' />
            <div>
            <h1>{name}</h1>
            <p className='p__poppins'>{position}</p>
            </div> 
        </div>
    </div>
  )
}

export default ReviewCards