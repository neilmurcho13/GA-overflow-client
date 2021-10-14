import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../api/authFunctions";
import { createComments, getBlog } from "../../api/callerFunctions";
import CommentCard from "./CommentCard";

const BlogComments = () => {
  const { id } = useParams();
  const [blogInfo, setBlogInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [state, setState] = useState({
    formData: {
      text: ""
    }
  });

  useEffect(() => {
    getBlog(id).then((data) => {
      setBlogInfo(data);
      console.log(blogInfo);
    });
  }, []);

  useEffect(() => {
    getBlog(id).then((data) => {
      setComments(data.comments);
      console.log("consolelog of setcomments", data.comments);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = state.formData;
    console.log(newComment);

    fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`
      },
      body: newComment
    }).then(() => {
      console.log("new blog added 🤖", newComment);
    });
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    };

    setState({ formData });
    console.log(formData);
  };

  return (
    <>
      <section className="main-content">
        <h1 className="latest-header">comments</h1>
        {comments && (
          <div className="blog-card-container">
            {comments.map((comment) => (
              <CommentCard
                key={comment._id}
                id={comment._id}
                text={comment.text}
                createdAt={comment.createdAt}
              />
            ))}
          </div>
        )}
      </section>
      <section className="main-content">
        <div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div>
                <label>post new comment:</label>
                <div>
                  <textarea
                    name="text"
                    type="text"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <input type="submit" value="post" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComments;

//const handleSubmit = async (e) => {
//    console.log("comment submit fired");
//    e.preventDefault();
//    try {
//      const res = await createComments(state.formData);
//      console.log(res);
//      if (res.status === 201) {
//        console.log("created comment");
//      }
//    } catch (err) {
//      console.error("error creating comment in user", err);
//    }
//  };

//http://localhost:3000/api/blogs/616869d88351fdedd0bce247/comments
