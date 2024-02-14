import React from 'react';
import './cutOuts.css';

const CutOuts = ({icon, name}) => {
  return (
    <div className='cuts'>
        <img src={icon} alt='course-icon' />
        <p className='p__poppins'>{name}</p>
    </div>
  )
}

export default CutOuts