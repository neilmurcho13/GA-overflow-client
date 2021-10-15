import React from 'react'
import { Link } from 'react-router-dom'

const handleLogout = () => {
  localStorage.clear('token')
  location.reload()
  console.log('logged out')
}

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-link'>All blogs</li>
        <li className='nav-link'>Project Recruiter</li>
        <Link to='/' className='nav-link' onClick={handleLogout}>
          Logout
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
