import React from "react";

const BlogCard = ({ _id, header, headerImgUrl, body }) => {
  return (
    <div className="blog-card" id={_id}>
      <div className="card-content">
        <img src={headerImgUrl} style={{ width: "200px", height: "200px" }} />
        <h4 className="blog-card-title">{header}</h4>
        <p className="blog-card-body">{body}</p>
        <button className="blog-card-btn">Read more</button>
      </div>
    </div>
  );
};

export default BlogCard;
