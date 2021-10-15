import React from "react";

const CommentCard = ({ id, text, createdAt }) => {
  const d = new Date(createdAt);
  const date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
  console.log(d.toISOString());

  return (
    <div className="comments-card" key={id}>
      <div>
        <div className="comments-text">
          <div>
            <p>{text}</p>
          </div>
          <div>
            <p>created: {date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
