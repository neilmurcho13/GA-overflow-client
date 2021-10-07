import React, { useState } from "react";
import { searchBlogs } from "../../api/callerFunctions.js";
import BlogCard from "../blogs/BlogCard.js";

const Search = () => {
  const [blogs, setBlogs] = useState([]);
  const [q, setQ] = useState("");

  const search = function (event) {
    event.preventDefault();
    searchBlogs(q).then((blogs) => setBlogs(blogs));
  };

  return (
    <>
      <form onSubmit={search} className="search-bar">
        <input
          type="search"
          placeholder="search"
          onChange={(e) => setQ(e.target.value)}
          value={q}
          required
        />
        <button type="submit" className="fas fa-search"></button>
      </form>
      <div className="main-content">
        <h1 className="latest-header">latest</h1>
        <div className="blog-card-container">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              header={blog.header}
              headerImgUrl={blog.headerImgUrl}
              body={blog.body}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
