import React from 'react';
import './profile.css';

import {Review, AboutUs, Banner, Proprietress, Parents } from '../../containers';


const Profile = () => {
  return (
    <div className='profile'>
        <Banner title='Igniting Minds, Inspiring Futures' text='Think. Explore. Dream. Achieve: Unleash Your Inner Genius,
          While we guide you every step of the way.' />
        <AboutUs />
        <Proprietress />
        <Review />
        <Parents />
    </div>
  )
}

export default Profile