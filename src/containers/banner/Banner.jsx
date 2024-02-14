import React from 'react';
import './banner.css';

const Banner = ({title, text}) => {
  return (
    <div className='banner'>
        <div className='banner__header'>
          <h1>{title}</h1>
          <p className='p__poppins'>{text}</p>
        </div>
      </div>
  )
}

export default Banner