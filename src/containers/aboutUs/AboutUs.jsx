import React from 'react';
import './aboutUs.css';

import profile01 from '../../assets/profile_01.jpeg'

const AboutUs = () => {
  return (
    <div className="about section__padding">
      <img src={profile01} alt='profile' />
      <div className='about__container'>
        <h2>Our Mission</h2>
        <hr />
        <p className='p__poppins'>To ignite the spark of independent thought and empower each student to 
        embark on a journey of lifelong exploration.
        We cultivate critical thinkers, courageous problem-solvers, 
        and passionate learners who thrive in a diverse and ever-changing world.</p>

        <h2>Our Vision</h2>
        <hr />
        <p className='p__poppins'>To be a beacon of innovative education, inspiring our students to become
        agents of positive change. We envision a future where our graduates think critically, question creatively,
        and explore fearlessly, leaving their mark on the world with purpose and compassion.</p>
      </div>
    </div>
  )
}

export default AboutUs