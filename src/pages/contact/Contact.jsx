import React from 'react';
import './contact.css';

import {phone,email, location, clock } from './imports';
import {Note} from '../../components';
import {Banner} from '../../containers';
import arrow from '../../assets/arrow.png';


const Contact = () => {
  return (
    <div className='contact' id='joinUs'> 
      <Banner title='Reach Out to Us Whenever'
      text="We take pride in our quick response service.
      That's why at any given time, we encourage you to reach out." />

      <div className='contact__container section__padding'>
        <div className='contact__info'>
          <Note icon={email} title='Email' text='info@cadillac.com' />
          <Note icon={phone} title='Contact Us' text ='0540244252 | 0203046956'/>
          <Note icon={clock} title='Working Hours' text ='Mon-Fri: 8:00am-4:00pm' />
          <Note icon={location} title='Location' text ='Ashongman Estates'/>
          <iframe src="https://www.google.com/maps/embed?
          pb=!1m18!1m12!1m3!1d3970.188716020293!2d-0.2396141251244061!3d
          5.6858455942958255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f9aac3e4d95
          %3A0x39231b9a001dfacf!2sSnowfalls%20Water%20House!5e0!3m2!1sen!2sgh!4v1707532385598!5m2!1sen!2sgh" 
          width="400" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
         <form action="https://api.web3forms.com/submit" method="POST" class='contact__form'>
            <div>
              <h2>Get in Touch</h2>
              <hr />
            </div>
            <input type="hidden" name="access_key" value="e3fd3e25-fcd5-49fa-9e95-fdaa0bb3b845"></input>
            <input type='text' name='name' placeholder='Your name' className='contact__input' required></input>
            <input type='email' name='email' placeholder='Your email' className='contact__input' required></input>
            <textarea name='message' placeholder='Your message' className='contact__input' required></textarea>
            <button type='submit'>Submit <img src={arrow} /></button>
            <div className='contact__form-text'>
            <p className='p__poppins'>OR</p>
            <a href='https://forms.gle/MV5kffyY2BRQGCsS6' className='p__poppins' target='_blank'>Fill an Admission Form</a>
            </div>
          </form>
      </div>

    </div>
  )
}

export default Contact