import React from 'react';
import './gallery.css';

import {student01, student02,student03,student04,student05,student06,student07} from './imports';
import {BsInstagram} from 'react-icons/bs';

const Images = [student01, student02,student03,student04,student05,student06,student07]

const Gallery = () => {
  return (
    <div className='gallery section__padding'>
        <div className='gallery__header'>
            <h1>Discover Our Amazing Profile <br/>School Profile Pictures</h1>
        </div>
        <div className='gallery__imageSlider snaps-inline'>
            {Images.map((image, index) => (
                <div className='media-element' key={index}>
                <img src={image} alt='gallery-image' />
                <BsInstagram className='media__insta' />
            </div> 
            ))}
        </div>
        <a href='/Gallery'>
          <button className='custom__btn p__poppins'>View More</button>
        </a>
        
        
    </div>
  )
}

export default Gallery