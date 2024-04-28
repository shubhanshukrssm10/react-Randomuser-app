import React from 'react'
import {Link } from 'react-router-dom';
import './App.css'
import { useState } from 'react';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

  

    const toggleNav = () => {
      const nav = document.querySelector('nav ul');
      nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
      setIsActive(!isActive);
    };
  return (
    <div>
    <div className="wrap1">
     <div className="container">
       <div className="row">
         <div className="col6 col-ml-12">
           <h6>
           RANDOMUSER.
           </h6>
         </div>
         <div className="col6 col-ml-12">
        <nav>
        <div className="nav-mobile">
        <a id="nav-toggle"  href="#!" onClick={toggleNav}><span></span></a>
      </div>
        <ul>
               <Link className='e' to="/"><li>Home</li></Link>
               <Link className='e' to="/about"><li>About</li></Link>
               <Link className='e' to="/contact"><li>Contact</li></Link>
            </ul>

        </nav>
         </div>
       </div>
     </div>
    </div>
   </div>
  )
}
