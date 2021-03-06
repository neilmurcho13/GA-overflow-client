import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getToken } from '../../api/authFunctions'
import { getBlog } from '../../api/callerFunctions'
import CommentCard from './CommentCard'

const BlogComments = () => {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [state, setState] = useState({
    formData: {
      text: ''
    }
  })

  useEffect(() => {
    getBlog(id).then((data) => {
      setComments(data.comments)
    })
  }, [])

  const handleSubmit = (e) => {
    console.log('execute handle sub')
    e.preventDefault()
    const newComment = state.formData

    console.log('new comment is', newComment)

    axios
      .request(`http://localhost:3000/api/blogs/${id}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        data: newComment
      })
      .then(() => {
        console.log('new blog added 🤖', newComment)
        location.reload()
        console.log(comments)
      })
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    }

    setState({ formData })
  }

  return (
    <>
      <section className='comments-container'>
        <h1 className='comments-header'>comments</h1>
        {comments && (
          <div className='comment-card-container'>
            {comments.map((comment) => (
              <CommentCard
                key={comment._id}
                id={comment._id}
                text={comment.text}
                createdAt={comment.createdAt}
              />
            ))}
          </div>
        )}
      </section>
      <section className='user-comment-container'>
        <form onSubmit={handleSubmit}>
          <label>post new comment:</label>
          <div>
            <textarea
              className='comment-textarea'
              name='text'
              type='text'
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input type='submit' value='post' className='comment-btn' />
          </div>
        </form>
      </section>
    </>
  )
}

export default BlogComments
