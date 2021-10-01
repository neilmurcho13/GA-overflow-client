import React, { useState, useEffect } from 'react'
import { getAllBlogs } from '../api/callerFunctions.js'
import BlogCard from './BlogCard.js'

const Home = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getAllBlogs().then((blogs) => {
      setBlogs(blogs)
    })
  }, [])

  console.log('this is the blogs state', blogs)

  return (
    <>
      <h1>GA // Overflow All Blogs 👇</h1>
      <div className='blog-card-container'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            header={blog.header}
            headerImgUrl={blog.headerImgUrl}
            body={blog.body}
          />
        ))}
      </div>
    </>
  )
}

export default Home
