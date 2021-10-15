import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Error404 = () => {
  return (
    <motion.div
      className='error-404'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h2>Oops..</h2>
      <p>That page cannot be found</p>
      <Link to='/'>Send me home...🚀</Link>
    </motion.div>
  )
}

export default Error404
