import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="center">
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
