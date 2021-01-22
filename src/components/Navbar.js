import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="navbar__toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar;

