import React from 'react';
import './credits.css';

const Credits = ({score,sign, info}) => {
  return (
    <div className='credits'>
        <h1>{score}<span>{sign}</span></h1>
        <p className='p__poppins'>{info}</p>
    </div>
  )
}

export default Credits