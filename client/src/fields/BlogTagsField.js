import React from "react";

const Blogtagsfield = ({ tags, handleChange }) => {
  <div>
    <label for="title">Tags</label>
    <input
      type="text" // TO BE CHANGED?
      name="tags"
      placeholder="tags"
      id="tags"
      value={tags}
      onChange={handleChange}
      required
    />
  </div>;
};

export default Blogtagsfield;
