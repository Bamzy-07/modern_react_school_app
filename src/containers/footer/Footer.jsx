import React from 'react';
import './footer.css';

import {Enquiry} from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='footer section__padding' id='contact'>
        <Enquiry />

        <div className="footer-links">
          <div className="footer-links_contact">
            <h1 className="footer-headtext">Contact Us</h1>
            <p className="p__poppins">Pra St, Acara, GHANA</p>
            <p className="p__poppins">+233 540-244-252</p>
            <p className="p__poppins">+233 548-499-525</p>
          </div>

          <div className="footer-links_logo">
            <span>Cadillac</span>
            <p className="p__poppins">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            <div className="footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
         </div>

         <div className="footer-links_work">
          <h1 className="footer-headtext">Working Hours</h1>
          <p className="p__poppins">Monday-Friday:</p>
          <p className="p__poppins">08:00 am - 4:00 pm</p>
         </div>
       </div>

       <div className="footer__copyright">
        <p className="p__poppins">2024 Cadillac. All Rights reserved.</p>
       </div>
      
    </div>
  )
}

export default Footer