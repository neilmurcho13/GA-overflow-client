import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { deleteBlog, getBlog } from '../../api/callerFunctions.js'
import BlogComments from './BlogComments.js'
import { getPayLoad } from '../../api/authFunctions.js'
import { getUserById } from '../../api/callerFunctions.js'

const BlogShow = () => {
  const history = useHistory()
  const { id } = useParams()
  const [blogInfo, setBlogInfo] = useState([])
  const [createdBy, setCreatedBy] = useState([])

  useEffect(() => {
    getBlog(id).then((data) => {
      setBlogInfo(data)
      console.log(blogInfo)
    })
  }, [])

  useEffect(() => {
    getBlog(id).then((data) => {
      setCreatedBy(data.createdBy)
      console.log('consolelog of created', data.createdBy)
    })
  }, [])

  useEffect(() => {
    getBlog(id).then((data) => {
      setCreatedBy(data.createdBy)
      console.log('consolelog of created', data.createdBy)
    })
  }, [])

  // use later to conditionally render the delete button depending on user login
  // if the id of this user is exactly the same of the craeted id of this cheese
  const isOwner = getPayLoad().sub === blogInfo.ObjectId
  console.log('is owner is', isOwner)

  const handleDelete = async () => {
    try {
      await deleteBlog(id)
      history.push('/')
    } catch (err) {
      console.error(`Failed to delete blog id: ${id}`, err)
    }
  }

  return (
    <div className='main-content'>
      <img src={blogInfo.headerImgUrl} className='blog-header-img' />
      <h1 className='blog-title'>{blogInfo.header}</h1>
      <div className='social-links'>
        <a
          href={createdBy.linkedinLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a
          href={createdBy.githubLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-square'></i>
        </a>
      </div>
      <h3 className='blog-summary'>{blogInfo.summary}</h3>
      <hr />
      <p className='blog-body'>{blogInfo.body}</p>
      <hr />
      <div className='body-img'>
        <img
          src={blogInfo.bodyImgUrl}
          style={{ width: '100%', height: '30em', margin: '3em 0' }}
        />
      </div>
      {/* <div className="blog-tags">
        {tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div> */}
      {/* <h3 className='blog-summary'>
        Created by : {blogInfo.createdBy.firstName}
      </h3> */}

      <div>Post by: {createdBy.username}</div>

      <BlogComments />

      <Link to={'/'}>
        <button className='home-btn'>Home</button>
      </Link>
      {isOwner && (
        <button className='delete-blog-btn' onClick={handleDelete}>
          Delete Blog
        </button>
      )}
    </div>
  )
}

export default BlogShow
