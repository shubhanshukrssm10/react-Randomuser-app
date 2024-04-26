import React,{ useState } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = (e) => {
    const parentListItem = e.target.parentNode;
    const siblings = parentListItem.parentNode.children;

    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i] !== parentListItem) {
        siblings[i].querySelector('.nav-dropdown').style.display = 'none';
      }
    }

    const dropdown = parentListItem.querySelector('.nav-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    e.stopPropagation();
  };

  const hideDropdowns = () => {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = 'none';
    });
  };

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
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About</a></li>
               <li><a href='#'>Contact</a></li>
            </ul>

        </nav>
         </div>
       </div>
     </div>
    </div>
   </div>
  )
}

export default App




