import React, { useState, useEffect } from 'react'
import { getAllBlogs } from '../../api/callerFunctions'
import BlogCard from './BlogCard'

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllBlogs().then((blogs) => {
      setBlogs(blogs)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='allblogs-content'>
      <h1 className='allblogs-header'>All blogs</h1>
      {isLoading && <h2>Loading...</h2>}
      {blogs && (
        <div className='allblogs-card-container'>
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
    </div>
  )
}

export default AllBlogs
