import { NavLink } from "react-router-dom"

function MobileNav({navbarStatus, setNavbarStatus}) {

  return (
    <nav className={`mobile__nav ${navbarStatus ? 'active' : ''}`}>
      <ul>
        <li>
          <NavLink to="/" className="home" onClick={() => setNavbarStatus(!navbarStatus)}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setNavbarStatus(!navbarStatus)}>About</NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={() => setNavbarStatus(!navbarStatus)}>Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setNavbarStatus(!navbarStatus)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav