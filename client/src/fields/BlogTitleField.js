import React from "react";

const Blogtitlefield = ({ title, handleChange }) => {
  <div>
    <label for="title">Title</label>
    <input
      type="text"
      name="title"
      placeholder="blog title"
      id="title"
      value={title}
      onChange={handleChange}
      required
    />
  </div>;
};

export default Blogtitlefield;
