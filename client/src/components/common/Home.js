import React, { useState, useEffect } from 'react'
import { getAllBlogs } from '../../api/callerFunctions.js'
import BlogCard from '../blogs/BlogCard.js'
import { motion } from 'framer-motion'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllBlogs().then((blogs) => {
      setBlogs(blogs)
      setIsLoading(false)
    })
  }, [])

  return (
    <motion.div
      className='main-content'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h1 className='latest-header'>Latest</h1>
      {isLoading && <h2>Loading...</h2>}
      {blogs && (
        <div className='blog-card-container'>
          {blogs
            .slice(0)
            .reverse()
            .map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog._id}
                header={blog.header}
                headerImgUrl={blog.headerImgUrl}
                body={blog.body}
              />
            ))}
        </div>
      )}
    </motion.div>
  )
}

export default Home
