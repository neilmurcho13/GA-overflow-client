import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { deleteBlog, getBlog } from '../../api/callerFunctions.js';
import BlogComments from './BlogComments.js';
import { getPayLoad } from '../../api/authFunctions.js';

const BlogShow = () => {
  const history = useHistory();
  const { id } = useParams();
  const [blogInfo, setBlogInfo] = useState({
    _id: '',
    header: '',
    headerImgUrl: '',
    para1: '',
    para2: '',
    para3: '',
    para4: '',
    para5: '',
    summary: '',
    bodyImgUrl: '',
    tags: [],
    createdBy: {
      username: '',
      firstName: '',
      lastName: '',
      location: '',
      githubLink: '',
      linkedinLink: '',
      _id: '',
    },
    createdAt: new Date(),
    comments: [],
  });

  useEffect(() => {
    console.log('calling use effect');
    getBlog(id).then((data) => {
      console.log('DATA IS ', data);
      setBlogInfo(data);
    });
  }, []);

  console.log('THIS BLOG DATE', blogInfo);

  const d = new Date(blogInfo.createdAt);
  const dtfUK = new Intl.DateTimeFormat('UK', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  console.log('date format ', dtfUK.format(d));

  const isOwner = getPayLoad().userId === blogInfo.createdBy._id;

  const handleDelete = async () => {
    try {
      await deleteBlog(id);
      history.push('/');
    } catch (err) {
      console.error(`Failed to delete blog id: ${id}`, err);
    }
  };

  return (
    <div className="main-content">
      <img src={blogInfo.headerImgUrl} className="blog-header-img" />
      <h1 className="blog-title">{blogInfo.header}</h1>

      <div className="blog-show-author">
        <span>by</span>
        <h3>{blogInfo.createdBy.username}</h3>
      </div>
      <div className="blog-show-date">
        {typeof blogInfo.createdAt === 'string' ? dtfUK.format(d) : ''}
      </div>

      <div className="social-links">
        <a
          href={blogInfo.createdBy.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href={blogInfo.createdBy.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </div>
      <h3 className="blog-summary">{blogInfo.summary}</h3>
      <hr />

      <p className="blog-paragraph">{blogInfo.para1}</p>
      <p className="blog-paragraph">{blogInfo.para2}</p>
      <p className="blog-paragraph">{blogInfo.para3}</p>
      <p className="blog-paragraph">{blogInfo.para4}</p>
      <p className="blog-paragraph">{blogInfo.para5}</p>

      <hr />
      <div className="body-img">
        <img
          src={blogInfo.bodyImgUrl}
          style={{ width: '100%', height: '30em', margin: '3em 0' }}
        />
      </div>
      {/* <div className="blog-tags">
        {tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div> */}

      <div>Posted by: {blogInfo.createdBy.username}</div>
      <div>
        Posted on:{' '}
        {typeof blogInfo.createdAt === 'string' ? dtfUK.format(d) : ''}
      </div>

      <BlogComments />

      <Link to={'/'}>
        <button className="home-btn">Home</button>
      </Link>
      {isOwner && (
        <button className="delete-blog-btn" onClick={handleDelete}>
          Delete Blog
        </button>
      )}
    </div>
  );
};

export default BlogShow;
