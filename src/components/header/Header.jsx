import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1 cla>Family Welness</h1>
        <p>Massage Therapy</p>
      </div>
      <nav className="navbar">
        <div className="menu active">Home</div>
        <div className="menu">About</div>
        <div className="menu">About</div>
        <div className="menu">About</div>
      </nav>
    </div>
  );
};

export default Header;
