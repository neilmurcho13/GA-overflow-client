import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { createBlog } from "../../api/callerFunctions";

const BlogNew = () => {
  const history = useHistory();
  const [state, setState] = useState({
    formData: {
      name: "",
      //summary: '',
      headerImgUrl: "",
      body: "",
      bodyImgUrl: "",
      tags: []
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Test", state.formData);

    try {
      console.log("Running the try");
      const result = await createBlog(state.formData);
      console.log(state.formData.name);
      history.push(`/blogs/${state.formData.name}`);
    } catch (err) {
      console.log("Error sending blog data", err);
    }
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    };

    setState({ formData });
  };

  return (
    <>
      <div>
        <h1> Create blog post </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Blog header
              <input
                type="text"
                placeholder="my blog header"
                onChange={handleChange}
                name="name"
                value={state.formData.name}
              />
            </label>
          </div>

          <div>
            <label>
              Feature image
              <input
                type="text"
                placeholder="feature image url"
                onChange={handleChange}
                name="headerImgUrl"
                value={state.formData.headerImgUrl}
              />
            </label>
          </div>
          <div>
            <label>
              Blog post
              <textarea
                type="text"
                placeholder="Blog post body"
                onChange={handleChange}
                name="body"
                required
                rows="10"
                value={state.formData.body}
              />
            </label>
          </div>
          <div>
            <label>
              Second image
              <input
                type="text"
                placeholder="Body image url"
                onChange={handleChange}
                name="bodyImgUrl"
                value={state.formData.bodyImgUrl}
              />
            </label>
          </div>
          <div>
            <label>
              Tags
              <input
                type="array"
                placeholder="tags"
                onChange={handleChange}
                name="tags"
                value={state.formData.tags}
              />
            </label>
          </div>
          <div className="field">
            <input
              type="submit"
              value="Submit"
              //value={`Add ${state.formData.name || 'blog header'}`}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogNew;
