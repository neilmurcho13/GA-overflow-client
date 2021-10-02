import React from "react";

const BlogBodyImageField = ({ bodyImage, handleChange }) => {
  <div>
    <label for="bodyImage">Main Image</label>
    <input
      type="text"
      name="bodyImage"
      placeholder="Blog image URL"
      id="bodyImage"
      value={bodyImage}
      onChange={handleChange}
      required
    />
  </div>;
};

export default BlogBodyImageField;
