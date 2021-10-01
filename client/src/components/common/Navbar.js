import React from 'react'
import gaLogo from '../../assets/ga-logo.png'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-content'>
          <div className='nav-logo'>
            <img src={gaLogo} />
          </div>
          <div className='nav-links'>
            <div className='search-bar'>
              <input />
              <i class='fas fa-search'></i>
            </div>
            <div className='create-post'>
              <button>create post</button>
              <i class='fas fa-pencil-alt'></i>
            </div>
            <div className='my-profile'>
              <button>my profile</button>
              <i class='far fa-user'></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
