import React from "react";
import BlogBodyImageField from "../../fields/BlogBodyImageField.js";
import Blogtagsfield from "../../fields/BlogTagsField.js";
import Blogtagsfield from "../../fields/BlogTextField";
import Blogtitlefield from "../../fields/BlogTitleField.js";
import createBlogPost from "../../fields/BlogTitleField.js";
import HeaderImageField from "../../fields/HeaderImageField.js";
import SubHeadingField from "../../fields/SubHeadingField.js";

const BlogNew = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    formDate: {
      title: "",
      headerImgUrl: "",
      summary: "",
      body: "",
      bodyImgUrl: "",
      tags: [{ type: String }],
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  try {
    console.log(state.formData);
    const result = await createBlogPost(state.formData);
    console.log(result.data._id);
    history.push(`/blogs/${result.data._id}`);
  } catch (err) {
    console.error("error creating blog");
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    };

    setState({ formData });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <Blogtitlefield
            handleChange={handleChange}
            header={state.formData.title}
          />
          <SubHeadingField
            handleChange={handleChange}
            name={state.formData.summary}
          />
          <HeaderImageField
            handleChange={handleChange}
            tastingNotes={state.formData.headerImgUrl}
          />
          <Blogtagsfield
            handleChange={handleChange}
            name={state.formData.body}
          />
          <BlogBodyImageField
            handleChange={handleChange}
            origin={state.formData.bodyImgUrl}
          />
          <Blogtagsfield
            handleChange={handleChange}
            name={state.formData.tags}
          />
        </div>
      </form>
    </section>
  );
};

export default BlogNew;
