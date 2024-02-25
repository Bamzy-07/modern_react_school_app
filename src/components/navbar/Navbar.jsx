import {React, useState} from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';

import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <p className='p__poppins'><a href='/'><span>Cadillac</span> Montessori</a></p>
      </div>
      
     <ul className='navbar__links'>
       <li><NavLink className='p__poppins' activeClassName='active' exact to='/' >Home</NavLink></li>
       <li><NavLink className='p__poppins' activeClassName='active' exact to='/profile' >Profile</NavLink></li>
       <li><NavLink className='p__poppins' activeClassName='active' exact to='/gallery' >Gallery</NavLink></li>
       <a href='/JoinUs'>
        <button>Join Us</button>
       </a>
    </ul>
    <div className='navbar__menu'>
    {
      toggleMenu
      ?< RiMenu2Line color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
      :< RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
    }
    {
      toggleMenu &&(
        <div className="navbar__menu-links">
          <li><NavLink className='p__poppins' activeClassName='active-link' exact to='/' >Home</NavLink></li>
          <li><NavLink className='p__poppins' activeClassName='active-link' exact to='/profile' >Profile</NavLink></li>
          <li><NavLink className='p__poppins' activeClassName='active-link' exact to='/gallery' >Gallery</NavLink></li>
          <a  href='/JoinUs'>
          <button className='nav__btn'>Join Us</button>
          </a>
          
        </div>
      )
    }
    </div>
   
    
    </div>
  )
}

export default Navbar