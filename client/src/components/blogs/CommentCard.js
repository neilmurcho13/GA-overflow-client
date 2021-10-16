import React from "react";

const CommentCard = ({ id, text, createdAt }) => {
  const d = new Date(createdAt);
  const dtfUK = new Intl.DateTimeFormat("UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  return (
    <div className="comments-card" key={id}>
      <div>
        <p className="comments-text">{text}</p>
        <p className="comment-date">{dtfUK.format(d)}</p>
      </div>
    </div>
  );
};

export default CommentCard;
