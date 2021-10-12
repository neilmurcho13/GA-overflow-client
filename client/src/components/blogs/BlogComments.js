import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createComments, getBlog } from "../../api/callerFunctions";
import CommentCard from "./CommentCard";

const BlogComments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [state, setState] = useState({
    formData: {
      text: ""
    }
  });

  useEffect(() => {
    getBlog(id).then((data) => {
      setComments(data.comments);
      console.log("consolelog of setcomments", data.comments);
    });
  }, []);

  const handleSubmit = async (e) => {
    console.log("login submit fired");
    e.preventDefault();
    try {
      const res = await createComments(state.formData);
      console.log(res);
      if (res.status === 201) {
        console.log("created comment");
      }
    } catch (err) {
      console.error("error logging in user", err);
    }
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
