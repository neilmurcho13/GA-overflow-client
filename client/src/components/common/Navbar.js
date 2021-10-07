import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import gaLogo from "../../assets/ga-logo.png";

const Navbar = ({ onSearchChange }) => {
  const history = useHistory();
  const [searchInputVaule, setSearchInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(searchInputVaule);
    history.push("/search");
  };

  return (
    <>
      <nav>
        <div className="nav-content">
          <div className="nav-logo">
            <img src={gaLogo} />
            <span>//</span>
            <h2>OVERFLOW</h2>
          </div>

          <div className="nav-links">
            <form onSubmit={handleSearch} className="search-bar">
              <input
                onChange={(e) => setSearchInputValue(e.target.value)}
                value={searchInputVaule}
                required
              />
              <i className="fas fa-search"></i>
            </form>

            <div className="create-post">
              <button>create post</button>
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="my-profile">
              <button>my profile</button>
              <i className="far fa-user"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// <div className="nav-links">
// <div className="search-bar">
//   <input />
//   <i className="fas fa-search"></i>
// </div>
