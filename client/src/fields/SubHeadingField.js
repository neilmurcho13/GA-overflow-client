import React from "react";

const SubHeadingField = ({ subHeading, handleChange }) => {
  <div>
    <label for="title">Sub Heading</label>
    <input
      type="text"
      name="title"
      placeholder="blog title"
      id="title"
      value={subHeading}
      onChange={handleChange}
      required
    />
  </div>;
};

export default SubHeadingField;
