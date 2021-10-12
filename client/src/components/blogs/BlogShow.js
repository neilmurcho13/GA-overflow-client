import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { deleteBlog, getBlog } from "../../api/callerFunctions.js";
import BlogComments from "./BlogComments.js";

const BlogShow = () => {
  const history = useHistory();
  const { id } = useParams();
  const [blogInfo, setBlogInfo] = useState([]);

  // store the tags from this blogpost
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getBlog(id).then((data) => {
      setBlogInfo(data);
      setTags(data.tags);
    });
  }, []);

  const handleDelete = async () => {
    try {
      await deleteBlog(id);
      history.push("/");
    } catch (err) {
      console.error(`Failed to delete blog id: ${id}`, err);
    }
  };

  return (
    <div className="main-content">
      <img src={blogInfo.headerImgUrl} className="blog-header-img" />
      <h1 className="blog-title">{blogInfo.header}</h1>
      <div className="social-links">
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github-square"></i>
      </div>
      <h3 className="blog-summary">{blogInfo.summary}</h3>
      <hr />
      <p className="blog-body">{blogInfo.body}</p>
      <hr />
      <div className="body-img">
        <img
          src={blogInfo.bodyImgUrl}
          style={{ width: "100%", height: "30em", margin: "3em 0" }}
        />
      </div>
      <div className="blog-tags">
        {tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div>

      <BlogComments />

      <Link to={"/"}>
        <button className="home-btn">Home</button>
      </Link>
      <button className="delete-blog-btn" onClick={handleDelete}>
        Delete Blog
      </button>
    </div>
  );
};

export default BlogShow;
