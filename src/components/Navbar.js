import React from 'react'
import NavbarToggle from '../components/NavbarToggle'
import { NavLink } from "react-router-dom";

function Navbar({navbarStatus, setNavbarStatus}) {
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

      <NavbarToggle 
       navbarStatus={navbarStatus} 
       setNavbarStatus={setNavbarStatus}
      />
    </nav>
  )
}

export default Navbar;

