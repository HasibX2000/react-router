import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink className="Navitem" to="/">
          Home
        </NavLink>
        <NavLink className="Navitem" to="/about">
          About
        </NavLink>
        <NavLink className="Navitem" to="/blog">
          Blog
        </NavLink>
        <NavLink className="Navitem" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
