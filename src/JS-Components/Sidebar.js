import React from "react";
import "../CSS-Components/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
    <div className="side-bar">
      <FontAwesomeIcon title="Home Page" className="side-icon" icon={faHouse} />
      <FontAwesomeIcon title="My Profile" className="side-icon" icon={faUser} />
      <FontAwesomeIcon title="Developers" className="side-icon" icon={faCode} />
    </div>
    <div className="side-border"></div>
    </>
  );
}

export default Sidebar;
