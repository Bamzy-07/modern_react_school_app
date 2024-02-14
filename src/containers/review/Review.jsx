import React from 'react';
import './review.css';

import {ReviewCards} from '../../components';
import person from '../../assets/head.jpg';

const Review = () => {
  return (
    <div className='review section__padding'>
      <h1>What Alumni Say <br /> About Our School</h1>
      <div className='review__container'>
        <ReviewCards text='If you are looking for a high school that feels like a second home, then Cadillac Montessori is the place for you. I graduated from there a few years ago, and I still miss the warm and welcoming atmosphere.' icon={person} name='Precious Amissah' position='CEO of Cadillac Ventures' />
        <ReviewCards text='Cadillac Montessori may not be the biggest school around, but its academic rigor is undeniable. The curriculum is challenging and diverse, offering a wide range of AP courses and electives to explore your passions.' icon={person} name='Ester Smith' position='Student at UG' />
        <ReviewCards text='Cadillac is more than just a school; it is an experience. From the dedicated teachers and challenging academics to the diverse extracurricular activities and supportive community, it truly has something for everyone.' icon={person} name='John Foster' position='Medical Doctor' />
        <ReviewCards text='Cadillac Montessori may not be the biggest school around, but its academic rigor is undeniable. The curriculum is challenging and diverse, offering a wide range of AP courses and electives to explore your passions.' icon={person} name='Ester Smith' position='Student at UG' />
        <ReviewCards text='Cadillac is more than just a school; it is an experience. From the dedicated teachers and challenging academics to the diverse extracurricular activities and supportive community, it truly has something for everyone.' icon={person} name='John Foster' position='Medical Doctor' />
      </div>
      <a href='/profile'>
        <button className='custom__btn p__poppins'>Read More</button>
      </a>
      
    </div>
  )
}

export default Review