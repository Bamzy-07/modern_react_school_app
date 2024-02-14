import React from 'react';
import {google, slack, microsoft, coursera, udemy} from './imports';
import './brand.css';


const Brand = () => {
    return (
        <div className = "brand section__padding">
          <div>
            <img src ={google} alt="google" />
          </div>

          <div>
            <img src ={slack} alt="slack" />
          </div>

          <div>
            <img src ={microsoft} alt="atlassian" />
          </div>

          <div>
            <img src ={coursera} alt="dropbox" />
          </div>

          <div>
            <img src ={udemy} alt="shopify" />
          </div>
        </div>
  )
}

export default Brand