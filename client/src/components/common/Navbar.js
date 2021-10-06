import React from 'react'
import gaLogo from '../../assets/ga-logo.png'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-content'>
          <div className='nav-logo'>
            <img src={gaLogo} />
            <span>//</span>
            <h2>OVERFLOW</h2>
          </div>
          <div className='nav-links'>
            <div className='search-bar'>
              <input />
              <i className='fas fa-search'></i>
            </div>
            <div className='create-post'>
              <button>create post</button>
              <i className='fas fa-pencil-alt'></i>
            </div>
            <div className='my-profile'>
              <button>my profile</button>
              <i className='far fa-user'></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
