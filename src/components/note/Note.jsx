import React from 'react';
import './note.css';

const note = ({icon, title, text}) => {
  return (
    <div className='note'>
        <img src={icon} />
        <div className='note__text'>
            <h2>{title}</h2>
            <hr/>
            <p className='p__poppins'>{text}</p>
        </div>      
    </div>
  )
}

export default note