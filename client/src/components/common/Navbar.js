import React from "react";
import { Link } from "react-router-dom";
import gaLogo from "../../assets/ga-logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-content">
          <div className="nav-logo">
            <img src={gaLogo} />
          </div>
          <div className="nav-links">
            <form className="search-bar">
              <input type="search" placeholder="search" required />
              <button type="submit" className="fas fa-search"></button>
            </form>

            <Link to={"/blogs/new"} className="create-post">
              <button>create post</button>
              <i className="fas fa-pencil-alt"></i>
            </Link>
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
