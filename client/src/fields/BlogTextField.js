import React from "react";

const Blogtextfield = ({ blogText, handleChange }) => {
  <div>
    <label for="blogText">Blog Text</label>
    <textarea
      type="text"
      name="blogText"
      placeholder="blog text here"
      id="blogText"
      value={blogText}
      onChange={handleChange}
      required
    />
  </div>;
};

export default Blogtextfield;
