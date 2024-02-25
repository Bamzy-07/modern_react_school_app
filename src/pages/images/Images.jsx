import React from 'react';
import './images.css';

import {student01, student02,student03,student04,student05,student06,student07} from './imports';
import {Banner} from '../../containers';

const Pics = [student01, student02,student03,student04,student05,student06,student07];

const Images = () => {
  return (
    <div className='images'>
      <Banner title='Brushstrokes of Genius Unleashed' text='A Kaleidoscope of Student Expression,
          A Raw Showcase of Young Talent.' />
      <div className='images__container section__padding'>
          {Pics.map((pic, index) => (
                <div className='media-pic' key={index}>
                <img src={pic} alt='gallery-image' />
            </div> 
            ))}
      </div>
    </div>
  )
}

export default Images