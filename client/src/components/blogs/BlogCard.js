import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  header,
  headerImgUrl,
  para1,
  comments,
  createdBy,
  createdAt
}) => {
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
    <div className="blog-card" key={id}>
      <div className="info-container">
        <h4 className="blog-card-title">{header}</h4>
        <div className="author-container">
          <span>by</span>
          <h3>
            {createdBy.firstName} {createdBy.lastName}
          </h3>
        </div>
        <div className="date-container">
          <h3>{dtfUK.format(d)}</h3>
        </div>
        <p className="blog-body-container">
          {para1.split(" ").slice(0, 10).join(" ")}...
        </p>
        <div className="links-container">
          <Link to={`/blogs/${id}`} className="blog-card-btn">
            read more
          </Link>
          <div className="likes-container">
            <i className="fa fa-thumbs-up"></i>
            <p>54</p>
          </div>
          <div className="blog-card-comments-container">
            <i className="fa fa-comments"></i>
            <p>{comments.length}</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          className="card-image"
          src={headerImgUrl}
          style={{ width: "225px", height: "200px" }}
        />
      </div>
    </div>
  );
};

export default BlogCard;
