import React from 'react'
import "./Navbar.scss"
import { useState } from 'react';
// import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar_left">
        JSCOP 5.0
      </div>
      <div className="navbar_right">
        <ul className={click ? "mobile" : "nav-menu"}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Events</a></li>
          <li><a href="/">Organiser</a></li>
          <li><a href="/">Passes</a></li>

        </ul>
        <div className="hamburger" onClick={handleclick}>
          {click ?
            (<i className='fa-solid fa-times' />) :
            (<i className='fa-solid fa-bars' />)
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar