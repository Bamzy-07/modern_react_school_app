import React from 'react';
import './hero.css';

import hero03 from '../../assets/hero03.png'

const Hero = () => {
  return (
    <div className='hero section__padding' id ='hero'>
      <div className='hero__image'>
        <img src={hero03} alt='Students' />
      </div>
      <div className='hero__content'>
        <h1>  We are your <span>Academic Partners</span></h1>
        <p className='p__poppins'>Dive into a world of endless possibilities! Unleash your passions with our diverse clubs, forge friendships that last a lifetime in our inclusive community, and push your limits with our challenging academics. <br />
           We're more than just a school, Whether you're a budding scientist, a creative artist, or a future leader, we have the programs and resources to help you thrive, we're a <span>launchpad for your future.</span>  <br />
           Explore, grow, and laugh with us - collaborate with inspiring teachers, tour our vibrant campus, and <span>apply</span> today! Your extraordinary journey starts here</p>
      </div>

    </div>
  )
}

export default Hero