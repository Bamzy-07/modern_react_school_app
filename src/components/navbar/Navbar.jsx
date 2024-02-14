import {React, useState} from 'react';
import './navbar.css';

import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <p className='p__poppins'><a href='/'><span>Cadillac</span> Montessori</a></p>
      </div>
      
     <ul className='navbar__links'>
       <li><a className='p__poppins active' href='/'>Home</a></li>
       <li><a className='p__poppins' href='/profile'>Profile</a></li>
       <li><a className='p__poppins' href='/gallery'>Gallery</a></li>
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
          <li ><a className='p__poppins' href='/'>Home</a></li>
          <li><a className='p__poppins' href='/profile'>Profile</a></li>
          <li><a className='p__poppins' href='/gallery'>Gallery</a></li>
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