import React from 'react';
import './header.css'

import learner01 from '../../assets/learner01.png';
import {Credits} from '../../components';

const Header = () => {
  return (
    <div className='header section__padding '>
      <div className='header__content'>
        <h1 className='h__style'>Begin your Academic Journey <br/> with Us <span>Today</span></h1>
        <p className='p__poppins'>Welcome to Cadillac Montessorri, where we inspire our students to achieve their full potential and <br/>
         prepare them to navigate our ever-evolving society with confidence and skill</p>
         <div className='header__sign'>
          <a href='/profile'>
          <button className='button_1 scale-up-center'>Read More</button>
          </a>
          <button className='button_2 scale-up-center'>Apply for Scholarship</button>
         </div>
         <div className='header__credits'>
           <Credits score='60' sign='+' info='Teachers' /> 
           <Credits score='700' sign='+' info='Students' /> 
           <Credits score='A' sign='+' info='Accreditation'/> 
         </div>
      </div>
      <div className='header__image'>
        <img src={learner01} alt='Student' />
      </div>
    </div>
  )
}

export default Header