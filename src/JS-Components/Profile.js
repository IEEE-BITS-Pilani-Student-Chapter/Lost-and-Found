import React from "react";
import second from "../CSS-Components/Profile.css";

function Profile() {
  return (
    <>
      <div className="user-profile">
        <div className="user-image">
          <img
            className="user-img"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <svg className="orange" viewBox="0 0 100 100">
            {" "}
            <path d="M95,50 A45,45 0 0,1 5,50 A45,45 0 0,1 50,5" />{" "}
          </svg>
          <svg className="black" viewBox="0 0 100 100">
            {" "}
            <path d="M95,50 A45,45 0 0,1 5,50 A45,45 0 0,1 50,5" />{" "}
          </svg>
        </div>
        <div className="user-details">
          <div className="user-details-top">
            <div className="user-name">Prateek Kashyap</div>
            <div className="user-email">f20211449@pilani.bits-pilani.ac.in</div>
            <div className="user-phone">8700225449</div>
            <div className="user-address">
              <span className="user-hostel">SR</span>
              <span className="user-room">205</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
