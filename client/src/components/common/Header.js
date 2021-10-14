import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import gaLogo from '../../assets/ga-logo.png'

const Header = ({ onSearchChange }) => {
  const history = useHistory()
  const [searchInputVaule, setSearchInputValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearchChange(searchInputVaule)
    history.push('/search')
  }

  return (
    <>
      <header>
        <Link to='/'>
          <div className='header-logo'>
            <img src={gaLogo} />
            <span>//</span>
            <h2>OVERFLOW</h2>
          </div>
        </Link>

        <div className='header-links'>
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
      </header>
    </>
  )
}

export default Header
