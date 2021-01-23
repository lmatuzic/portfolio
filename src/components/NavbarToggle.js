import React from 'react'

function NavbarToggle({navbarStatus, setNavbarStatus}) {
  return (
    <button onClick={() => setNavbarStatus(!navbarStatus)} className={`navbar__toggle ${navbarStatus ? 'active' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default NavbarToggle
