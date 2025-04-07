import React from 'react';
import '../css/TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="logo">
        <i className="fab fa-linkedin"></i>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="nav-icons">
        <div className="icon-item">
          <i className="fas fa-briefcase"></i>
          <span>Post Job</span>
        </div>
        <div className="icon-item notification">
          <i className="fas fa-bell"></i>
          <span>Notifications</span>
          <span className="badge">15</span>
        </div>
        <div className="icon-item profile">
          <i className="fas fa-user-circle"></i>
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;