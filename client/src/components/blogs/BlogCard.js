import React from 'react'
import { Link } from 'react-router-dom'

//NEED TO CHECK ENDPOINT FOR SINGLE POST
//NEED TO ADD ENDPOINT TO COMMENTS

const BlogCard = ({ id, header, headerImgUrl, body }) => {
  return (
    <div className='blog-card' key={id}>
      <div className='card-content'>
        <div className='info-container'>
          <h4 className='blog-card-title'>{header}</h4>
          <p className='blog-card-body'>
            {body.split(' ').slice(0, 10).join(' ')}...
          </p>
          <Link to={''} className='comments-btn'>
            <i className='fa fa-comments'></i>
          </Link>
          <br />
          <h2>the id for this card is {id}</h2>
          <button>
            <i className='fa fa-thumbs-up' aria-hidden='true'></i>
          </button>
          <Link to={`/blogs/${id}`} className='blog-card-btn'>
            read more
          </Link>
        </div>
        <div className='image-container'>
          <img
            className='card-image'
            src={headerImgUrl}
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
