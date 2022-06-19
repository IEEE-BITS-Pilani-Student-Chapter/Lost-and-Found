import React from "react";
import "../CSS-Components/Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
      <div className="navbar">
        {/* temporary logo - TO BE CHANGED */}
        {/* leftmost div - containing logo only */}
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShV-TuqQlHIuTrTnsPbti-zjZ2oh0TDAEN8Q&usqp=CAU" alt="" />
        </div>

        {/* switch b/w pages */}
        <div className="nav-items">
          <div className="link-div"><Link className="nav-link" to="/categories">Categories</Link></div>
          <div className="link-div"><Link className="nav-link" to="/lost">Lost</Link></div>
          <div className="link-div"><Link className="nav-link" to="/found">Found</Link></div>
        </div>

        {/* search bar */}
        <div className="search" id="search">
          <input type="text" className="search_bar" />
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </div>

        {/* rightmost div - USER */}
        <Link className="nav-link" to='/signUp'>SIGN UP</Link>
        {/* <div className="user-img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
        </div> */}
      </div>
  );
}

export default Navbar;
