import React from "react";

const CommentCard = ({ id, text, createdAt }) => {
  return (
    <div key={id}>
      <div>
        <div>
          <p>{id}</p>
          <p>{text}</p>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
