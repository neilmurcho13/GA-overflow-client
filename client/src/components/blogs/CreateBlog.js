import React from "react";

const createBlog = () => {
  return (
    <div>
      <h1> Create blog post </h1>
      <form>
        <label>
          Header
          <input type="text" name="name" placeholder="my blog header" />
        </label>
        <label>
          Sub Header
          <input type="text" name="name" placeholder="my sub header" />
        </label>
        <label>
          Header image url
          <input type="" name="name" placeholder="add image url" />
        </label>
        <label>
          Paragraph
          <input type="text" name="name" placeholder="add paragraph text" />
        </label>
        <label>
          Blog body image url
          <input type="text" name="name" placeholder="add image url" />
        </label>
        <label>
          Tags
          <input type="text" name="name" placeholder="REMOVE" />
        </label>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};
export default createBlog;
