import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { isLoggedIn, getToken } from '../../api/authFunctions'
import gaLogo from '../../assets/ga-logo.png'

const Header = ({ onSearchChange }) => {
  const history = useHistory()
  const [searchInputVaule, setSearchInputValue] = useState('')
  const [userLoggedIn, setUseLoggedIn] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    onSearchChange(searchInputVaule)
    history.push('/search')
  }

  // to check if the user is logged in to conditionally render header links
  useEffect(() => {
    getToken() ? setUseLoggedIn(true) : setUseLoggedIn(false)
  }, [])

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

          {userLoggedIn ? (
            <>
              <Link to='/blogs/new' className='create-post'>
                <div>create post</div>
                <i className='fas fa-pencil-alt'></i>
              </Link>
              <Link to='/user/profile' className='my-profile'>
                <div>my profile</div>
                <i className='far fa-user'></i>
              </Link>
            </>
          ) : (
            <>
              <Link to='/login' className='create-post'>
                <div>login</div>
                <i className='fas fa-pencil-alt'></i>
              </Link>
              <Link to='/register' className='my-profile'>
                <div>register</div>
                <i className='far fa-user'></i>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
