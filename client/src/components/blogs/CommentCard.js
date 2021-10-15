import React from 'react'

const CommentCard = ({ id, text, createdAt }) => {
  const d = new Date(createdAt)
  const date =
    d.getHours() + ':' + d.getMinutes() + ', ' + d.toDateString()
  console.log(d.toISOString())

  return (
    <div className='comments-card' key={id}>
      <div>
        <p className='comments-text'>{text}</p>
        <p className='comment-date'>{date}</p>
      </div>
    </div>
  )
}

export default CommentCard
