import React from 'react';
import './parents.css';

import {ParentCard} from '../../components';
import head from '../../assets/head.jpg';

const Parents = () => {
  return (
    <div className='parents section__padding'>
        <h1>What Parents Say About Our School</h1>
        <div className='parent__review snaps-inline'>
        <ParentCard pic={head} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque' name='Miss Caddy'/>
        <ParentCard pic={head} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque' name='Miss Caddy'/>
        <ParentCard pic={head} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque' name='Miss Caddy'/>
        <ParentCard pic={head} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque' name='Miss Caddy'/>
        <ParentCard pic={head} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque' name='Miss Caddy'/>
        </div>
        
    </div>
  )
}

export default Parents