import React from 'react';
import './enquiry.css';

const Enquiry = () => {
  return (
    <div className='enquiry section__padding'>
        <div className='enquiry__header'>
            <h1>Visit Our Campus today</h1>
            <p className='p__poppins'>Schedule/ Book an appointment with Us Today</p>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" className='enquiry__form'>
            <input type="hidden" name="access_key" value="e3fd3e25-fcd5-49fa-9e95-fdaa0bb3b845"></input>
            <input type='text' name='name' placeholder='Your name' className='contact__input' required></input>
            <input type='phone' name='contact' placeholder='Your contact' className='contact__input' required></input>
            <input type='date' name='date' placeholder='Your Appointment Date' className='contact__input' required></input>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default Enquiry