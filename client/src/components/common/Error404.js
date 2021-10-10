import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='error-404'>
      <h2>Oops..</h2>
      <p>That page cannot be found</p>
      <Link to='/'>Send me home...🚀</Link>
    </div>
  )
}

export default Error404
