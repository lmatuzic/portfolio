import NavbarToggle from '../components/NavbarToggle'
import { NavLink } from "react-router-dom"

function Navbar({navbarStatus, setNavbarStatus, theme, setTheme}) {
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="navbar">
      <label htmlFor="theme-toggle" className="switch">
        <input id="theme-toggle" type="checkbox" onClick={() => changeTheme()} />   
        <div></div>
      </label>

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

export default Navbar