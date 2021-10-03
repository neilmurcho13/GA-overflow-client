import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlog } from '../../api/callerFunctions.js'

const BlogShow = () => {
  const { id } = useParams()
  const [blogInfo, setBlogInfo] = useState([])

  useEffect(() => {
    getBlog(id).then((data) => {
      setBlogInfo(data)
    })
  }, [])

  console.log(blogInfo)

  return (
    <div className='main-content'>
      <h1>{blogInfo.header}</h1>
      <img src={blogInfo.headerImgUrl} />
      <h3>{blogInfo.summary}</h3>
      <p>{blogInfo.body}</p>
      <img
        src={blogInfo.bodyImgUrl}
        style={{ width: '300px', height: '300px' }}
      />
      <button>{blogInfo.tags}</button>
      <br />
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default BlogShow
