import React, { useState, useEffect } from 'react'
import { getAllBlogs } from '../../api/callerFunctions.js'
import BlogCard from '../blogs/BlogCard.js'

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
    <div className='main-content'>
      <h1 className='latest-header'>latest</h1>
      {isLoading && <h2>Loading...</h2>}
      {blogs && (
        <div className='blog-card-container'>
          {blogs.map((blog) => (
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
    </div>
  )
}

export default Home
