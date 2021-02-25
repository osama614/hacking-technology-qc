import React from "react";
import { Link } from "react-router-dom";

import { WhiteLogo } from "../../../../assets/index";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark blog-nav">
      <Link className="navbar-brand" to="/">
        <img src={WhiteLogo} width={30} height={30} alt="logo" loading="lazy" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            المدونة <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            من نحن
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
