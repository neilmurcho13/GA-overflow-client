import React, { useEffect, useState } from 'react'
import { searchBlogs } from '../../api/callerFunctions.js'
import BlogCard from '../blogs/BlogCard.js'

const Search = ({ searchQuery }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    searchBlogs(searchQuery).then((blogs) => setBlogs(blogs))
  }, [])

  return (
    <>
      <div className='main-content'>
        <h1 className='latest-header'>latest</h1>
        <div className='blog-card-container'>
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              header={blog.header}
              headerImgUrl={blog.headerImgUrl}
              para1={blog.para1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Search
