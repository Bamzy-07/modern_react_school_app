import React from 'react';
import './cards.css'

const Cards = ({number, title, info}) => {
  return (
    <div className='cards'>
      <div className='cards__header'>
        <p className='p__poppins'>{number}</p>
        <h1>{title}</h1>
      </div>
      <div className='cards__content'>
        <p className='p__poppins'>{info}</p>
      </div>
      
    </div>
  )
}

export default Cards