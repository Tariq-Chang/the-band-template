import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <a href="#home">HOME</a>
        <a href="#band">BAND</a>
        <a href="#tour">TOUR</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="navbar__right">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Navbar;
