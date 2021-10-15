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
        <Link to='/'>
          <li className='nav-link'>Latest</li>
        </Link>
        <Link to='/blogs/all'>
          <li className='nav-link'>All</li>
        </Link>
        <Link to='/recuiter'>
          <li className='nav-link'>Recruiter</li>
        </Link>
        <Link to='/' onClick={handleLogout}>
          <li className='nav-link'>Logout</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
