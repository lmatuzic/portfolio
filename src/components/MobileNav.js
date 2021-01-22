import React from 'react'

function MobileNav({navbarStatus}) {
  return (
    <div className={`mobile__nav ${navbarStatus ? 'active' : ''}`}>
      mobile nav layout goes here
    </div>
  )
}

export default MobileNav
