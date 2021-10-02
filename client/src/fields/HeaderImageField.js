import React from "react";

const HeaderImageField = ({ headerImage, handleChange }) => {
  <div>
    <label for="headerImage">Header Image</label>
    <input
      type="text"
      name="headerImage"
      placeholder="header Image URL"
      id="headerImage"
      value={headerImage}
      onChange={handleChange}
      required
    />
  </div>;
};

export default HeaderImageField;
