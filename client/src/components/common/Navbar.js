import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import gaLogo from '../../assets/ga-logo.png'

const Navbar = ({ onSearchChange }) => {
  const history = useHistory()
  const [searchInputVaule, setSearchInputValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearchChange(searchInputVaule)
    history.push('/search')
  }

  return (
    <>
      <nav>
        <div className='nav-content'>
          <Link to='/'>
            <div className='nav-logo'>
              <img src={gaLogo} />
              <span>//</span>
              <h2>OVERFLOW</h2>
            </div>
          </Link>

          <div className='nav-links'>
            <form onSubmit={handleSearch} className='search-bar'>
              <input
                type='search'
                onChange={(e) => setSearchInputValue(e.target.value)}
                value={searchInputVaule}
                required
              />
              <i className='fas fa-search'></i>
            </form>

            <Link to='/blogs/new' className='create-post'>
              <div>create post</div>
              <i className='fas fa-pencil-alt'></i>
            </Link>
            <Link to='/user/profile' className='my-profile'>
              <div>my profile</div>
              <i className='far fa-user'></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
