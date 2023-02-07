import React from "react";
import "./Band.css";

function Band() {
  return (
    <div className="wrapper" id="band">
      <div className="band">
        <h1 className="band__title">THE BAND</h1>
        <p className="band__tagline">We love music</p>
        <p className="band__description">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="band__members">
          <div className="band__member">
            <p>Name</p>
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" />
          </div>
          <div className="band__member">
            <p>Name</p>
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" />
          </div>
          <div className="band__member">
            <p>Name</p>
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Band;
