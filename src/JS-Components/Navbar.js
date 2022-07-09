import React from "react";
import "../CSS-Components/Navbar.css";
import logo from "../Assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src={logo} alt="LNF" />
      <div className="nav-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link-div")}
          to="categories"
        >
          Categories
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link-div")}
          to="lost"
        >
          Lost
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link-div")}
          to="found"
        >
          Found
        </NavLink>
      </div>

      <form className="nav-search">
        <input type="text" className="nav-search-input" placeholder=" " />
        <button type="reset" className="nav-search-btn"></button>
      </form>

      {/* rightmost div - USER */}
      <Link className="link-div" id="signup" to="signup" todo="SIGN UP">
        SIGN UP
      </Link>
    </div>
  );
}

export default Navbar;
