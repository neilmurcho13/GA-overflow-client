import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../../api/callerFunctions";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllBlogs().then((blogs) => {
      setBlogs(blogs);
      setIsLoading(false);
    });
  }, []);

  return (
    <motion.div
      className="allblogs-content"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="header-container">
        <motion.h1
          className="allblogs-header"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -150, opacity: 0 }}
          transition={{ type: "tween", duration: 2 }}
        >
          All blogs
        </motion.h1>
        <motion.div
          className="latest-header-line"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -900, opacity: 0 }}
          transition={{ type: "tween", duration: 2 }}
        ></motion.div>
      </div>
      {isLoading && <h2>Loading...</h2>}
      {blogs && (
        <div className="allblogs-card-container">
          {blogs
            .slice(0)
            .reverse()
            .map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog._id}
                header={blog.header}
                headerImgUrl={blog.headerImgUrl}
                para1={blog.para1}
                comments={blog.comments}
                createdBy={blog.createdBy}
                createdAt={blog.createdAt}
              />
            ))}
        </div>
      )}
    </motion.div>
  );
};

export default AllBlogs;
