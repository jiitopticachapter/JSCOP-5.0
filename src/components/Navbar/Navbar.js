import React from 'react'
import "./Navbar.scss"
// import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        JSCOP 5.0
      </div>
      <div className="navbar_right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Events</a></li>
          <li><a href="/">Organiser</a></li>
          <li><a href="/">Passes</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar