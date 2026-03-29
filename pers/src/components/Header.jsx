import React from "react";
import profilePic from "../assets/profile.png";

function Header({ isOpen, setIsOpen, user = null }) {
  var currentUser = user || {name: "Administrator", photo: profilePic};

  var today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="header">
      <div className="left">
        {!isOpen && (
          <button className="menu-btn" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        )}

        <div className="title">
          <h1>Traffic Enforcement Management System</h1>
          <p>Integrated Web-Based Violation Management  •  Lucena City</p>
        </div>
      </div>

      <div className="user">
        <div className="user-avatar">
          <img
            src={currentUser.photo || profilePic}
            alt={`${currentUser.name} profile`}
            className="profile-icon"
          />
        </div>
        <div className="user-text">
          <span className="user-name">{currentUser.name}</span>
          <small>{today}</small>
        </div>
      </div>
    </div>
  );
};

export default Header;