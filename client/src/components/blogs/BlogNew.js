import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const BlogNew = () => {
  const [header, setHeader] = useState('')
  const [headerImgUrl, setHeaderImgUrl] = useState('')
  const [body, setBody] = useState('')
  const [summary, setSummary] = useState('')
  const [bodyImgUrl, setBodyImgUrl] = useState('')

  const [isPending, setIsPending] = useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { header, headerImgUrl, body, summary, bodyImgUrl }

    setIsPending(true)

    fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added 🤖', blog)
      setIsPending(false)
    })
    history.push('/')
  }

  return (
    <div className='create-container'>
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Header*</label>
        <input
          type='text'
          required
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          placeholder='...'
        />
        <label>Header Image*</label>
        <input
          type='text'
          required
          value={headerImgUrl}
          onChange={(e) => setHeaderImgUrl(e.target.value)}
          placeholder='copy + paste image address url'
        />
        <label>Blog body* </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='...'
        ></textarea>
        <label>Blog sub-header* </label>
        <textarea
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder='...'
        ></textarea>
        <label>Body Image*</label>
        <input
          type='text'
          required
          value={bodyImgUrl}
          onChange={(e) => setBodyImgUrl(e.target.value)}
          placeholder='copy + paste image address url'
        />
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Creating blog</button>}
      </form>
    </div>
  )
}

export default BlogNew
